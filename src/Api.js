
export default class Api{
    
    api(path, method ='GET', body= null){
        let url = path;

        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        };

        if(body !=null){
            options.body = JSON.stringify(body);
        }

        return fetch(url,options);

    }

    async getAllProducts(){
        try{
            const rez = await this.api('http://localhost:3000/api/v1/products');

            if(rez.status === 200){
                return rez.json();
            }else{
                return 0;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getAllProductsAndCategories(){
        try{
            const rez = await this.api('http://localhost:3000/api/v1/products/cat');

            if(rez.status === 200){
                return rez.json();
            }else{
                return rez;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async orderBy(type){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products/order/${type}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getProductById(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async addProduct(newObj){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products`,'POST', newObj);
            
            if(rez.status === 204){
                return "success";

            }else{
                const data = await rez.json();
                return data.error;
            }

         }catch(e){
           
            throw new Error(e);
         }
        
    }

    async updatProduct(newObj,id){

        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products/${id}`,'PUT', newObj);

            if(rez.status === 204){
                return 'update success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteProduct(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products/${id}`,'DELETE');

            if(rez.status === 204){
                return 'delete success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getAllCategories(){
        try{
            const rez = await this.api('http://localhost:3000/api/v1/categories');

            if(rez.status === 200){
                return rez.json();
            }else{
                return 0;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getCategoriesById(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/categories/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async addCategories(newObj){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/categories`,'POST', newObj);
            
            if(rez.status === 204){
                return "success";

            }else{
                const data = await rez.json();
                return data.error;
            }

         }catch(e){
           
            throw new Error(e);
         }
        
    }

    async updateCategories(newObj,id){

        try{
            const rez = await this.api(`http://localhost:3000/api/v1/products/${id}`,'PUT', newObj);

            if(rez.status === 204){
                return 'update success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteCategories(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/categories/${id}`,'DELETE');

            if(rez.status === 204){
                return 'delete success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }






    async getAllCustomers(){
        try{
            const rez = await this.api('http://localhost:3000/api/v1/customers');

            if(rez.status === 200){
                return rez.json();
            }else{
                return 0;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getCustomersById(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/customers/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async addCustomers(newObj){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/customers`,'POST', newObj);
            
            if(rez.status === 204){
                return "success";

            }else{
                const data = await rez.json();
                return data.error;
            }

         }catch(e){
           
            throw new Error(e);
         }
        
    }

    async updateCustomers(newObj,id){

        try{
            const rez = await this.api(`http://localhost:3000/api/v1/customers/${id}`,'PUT', newObj);

            if(rez.status === 204){
                return 'update success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteCustomers(id){
        try{
            const rez = await this.api(`http://localhost:3000/api/v1/customers/${id}`,'DELETE');

            if(rez.status === 204){
                return 'delete success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
}