import React from 'react';
import styles from './Blogs.module.css';
import Chat from '../../assets/Chat.png';
import Calendar_Days from '../../assets/Calendar_Days.png';
import Show from '../../assets/Show.png';
import blogPoster1 from '../../assets/blogPoster1.png';
import blogPoster2 from '../../assets/blogPoster2.png';
import blogPoster3 from '../../assets/blogPoster3.png';


const Blogs = () => {

  const blogData = [
    {
        poster: blogPoster1, 
        category: 'Insight', 
        title: 'Future of IT Solutions', 
        comments: 3, 
        views: 400, 
        date: '1 month ago', 
        content: 'Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success.'
    },
    {
        poster: blogPoster2, 
        category: 'Insight', 
        title: 'Future of IT Solutions', 
        comments: 3, 
        views: 400, 
        date: '1 month ago', 
        content: 'Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success.'
    },
    {
        poster: blogPoster3, 
        category: 'Insight', 
        title: 'Future of IT Solutions', 
        comments: 3, 
        views: 400, 
        date: '1 month ago', 
        content: 'Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success.'
    },
  ]
  return (
    <>
        <div style={{margin: '100px 0'}}>
            <h1 className=' text-center text-4xl mb-3'>Our <span className={styles.titleSpan}>Blog</span> and <span className={styles.titleSpan}>Articls</span></h1>
            <h3 className=' text-center mb-5'>Take a look at our Company’s Blog Series or read some  professional gardening insights and news.</h3>

            <div className={styles.cardContainer}>
            {blogData.map((blog, index) => (
                <div className={styles.card} key={index}>
                    <img src={blog.poster} alt='blog poster' className={styles.poster}/>
                    <p className={styles.category}>{blog.category}</p>
                    <h3 className={styles.title}>{blog.title}</h3>

                    <div className={styles.iconContainer} alt='icon'>
                        <div className={styles.iconSpan}>
                            <img src={Chat} className={styles.icon}/>
                            <h4>{blog.comments}</h4> 
                        </div>
                        <div className={styles.iconSpan} alt='icon'>
                            <img src={Show} className={styles.icon}/>
                            <h4>{blog.views}+</h4>
                        </div>
                        <div className={styles.iconSpan} alt='icon'>
                            <img src={Calendar_Days} className={styles.icon}/>
                            <h4>{blog.date}</h4>
                        </div>
                    </div>

                    <p className={styles.content}>{blog.content}</p>
                </div>
            ))}
            </div>

        </div>
    </>
  )
}

export default Blogs;