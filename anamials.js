
  
    const animals=["dog","cat","wolf","lion","dog","cat","wolf","lion","dog","tiger"];
     const getAnimal = animals.reduce((acc,cur)=> (acc[cur]) ?{...acc,[cur]: acc[cur]+=1} :{...acc,[cur]: acc[cur]=1},{});
      
        console.log(getAnimal);