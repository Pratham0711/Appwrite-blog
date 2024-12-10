import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
   client = new Client();
   databases;
   bucket;
   constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwritePROJECTID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
   }
   async createPost({title, slug, content, FeaturedImage, status, userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                slug,
                 {
                    title,
                    content,
                    FeaturedImage,
                    status,
                    userid

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }

   }
   async  updatePost(slug, {title,  content, FeaturedImage, status}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDATABASEID,
            conf.appwriteCOLLECTIONID,
            slug,
            {
                title,
                content,
                FeaturedImage,
                status
            }
        )
        
    } catch (error) {
        console.log("Appwrite serive :: updatePost :: error", error);
        
    }
   }
   async deletePost(slug){
    try {
           return await this.databases.deleteDocument(
                conf.appwriteDATABASEID,
                conf.appwriteCOLLECTIONID,
                slug
                
            )
             return true
    } catch (error) {
        console.log("aapwrite server::delete error",error);
        return false
        
    }
    
   }

        async getPost(slug){
            try {
            return await this.databases.getDocument(
            conf.appwriteDATABASEID,
            conf.appwriteCOLLECTIONID,
            slug
            )
        }
        
     catch (error) {
        console.log("Appwrite serive :: getPost :: error", error);
        return false

        
    }
}

        async getPosts(quries = [Query.equal("status", "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDATABASEID,
                    conf.appwriteCOLLECTIONID,
                    quries,
                )
                
            } catch (error) {
                console.log("Appwrite serive :: getPosts :: error", error);
                return false
                
            }
        }
        //uplod files method
        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBUCKETID,
                    ID.unique(),
                    file

                )
            } catch (error) {
                console.log("Appwrite serive :: uploadFile :: error", error);
                return false
                
            }
        }
        async deleteFile(fileId){
            try {
                return await this.bucket.deleteFile(
                    conf.appwriteBUCKETID,
                    fileId
                )
                
            } catch (error) {
                console.log("appwrite service::File",error);
                return false
                
            }
        }
        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBUCKETID,
                fileId
            )
        }
}
const service = new Service()
 export default service