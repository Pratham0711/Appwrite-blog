import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, Postcard } from '../components/index'

function AllPost() {
    const [post, setPost] =useState([])
    useEffect(() => {} )
    
    appwriteService.getPost([]).then((post) => {
        
        if(post){ 
        setPost(post.documents)
    }
})
    return (
    <div className='w-full py-8'>
        <Container>
            
           <div className='flex, flex-wrap'>
            {
                post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard post={post} />
                        </div>
                ))
            }
            
           </div>
        </Container>
    </div>
  )
}

export default AllPost