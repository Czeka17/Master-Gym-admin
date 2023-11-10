import { useState,useEffect } from "react";
import styles from './posts.module.scss'
import PostItem from "./postItem";
function Posts(){
    const [posts,setPosts] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
		async function getPosts() {
			setIsLoading(true)
			try {
				const response = await fetch("https://master-gym-backend-production.up.railway.app/api/blog");
				if (response.ok) {
					const data = await response.json();
					setPosts(data.posts);
					setIsLoading(false)
				} else {
					console.error(
						"Failed to fetch data:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		}
		getPosts();
	},[]);
    return <div>
	{!isLoading && <div className={styles.grid}>
					{posts.map((post) => (
						<PostItem
							key={post._id}
							Post={post}
						/>
					))}
				</div>}
				{isLoading && <p>Loading...</p>}
    </div>
}
export default Posts;