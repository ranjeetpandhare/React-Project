import axios from 'axios'

 class ApiService  {
      postUrl='https://jsonplaceholder.typicode.com/posts'

   fetchPost(data){
    axios.post(this.postUrl,data)
   }
}

export default new ApiService();
