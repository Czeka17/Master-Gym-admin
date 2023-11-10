import styles from './posts.module.scss'
function PostItem({Post}){
    async function deleteHandler(){
        await fetch(`https://master-gym-backend-production.up.railway.app/api/edit/${Post._id}`,{method:"DELETE"})
    }
 return <div className={styles.newsitem}>
    <div className={styles.newsitem__image}>
        <img src={Post.image} alt={Post.title}/>
</div>
<div className={styles.newsitem__title}>
<h3>{Post.title}</h3>
<div dangerouslySetInnerHTML={{__html:Post.intro}}></div>
</div>
<div><button onClick={deleteHandler}>Delete</button></div>
 </div>
}
export default PostItem;