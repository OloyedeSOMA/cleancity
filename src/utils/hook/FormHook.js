import { useState, useEffect } from "react";



export function FormHook (key, defaultVal= null) {
    // useEffect(()=>{
    //     localStorage.setItem("pledges", JSON.stringify(pledgeDataLog));
    //     console.log("stored:", pledgeDataLog);
    // })
    const [formData, setFormData] = useState({});
    const [data, setData] = useState(()=>{
        const stored = localStorage.getItem(key);
        if(stored !== null){
            return JSON.parse(stored);
        }

        if(defaultVal !== null){
            localStorage.setItem(key, JSON.stringify(defaultVal));
            return defaultVal;
        }

        return [] ;
    });
    const [editingId, setEditingId] = useState(null);
    
    

    // save data whnever there is a change 
    useEffect(()=>{
        console.log("updated data:", data)
        localStorage.setItem(key, JSON.stringify(data));
        console.log("stored....");
        
    },[key, data])


    const handleData = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (editingId){
            setData((prev)=>
                prev.map((item)=>
                    item.id === editingId? {...item, ...formData} : item
                )
            );
            setEditingId(null); //exit edit mode
        }else{
            const today = new Date();
            const formattedDate = `${today.getDate()}/${today.getMonth() +1}/${today.getFullYear().toString().slice(-2)}`;
            const log = ( {
                id: Date.now(), date:formattedDate,  ...formData
            });
            setData((prev)=>[log, ...prev])
            console.log(log);
            console.log(data)

        }
        // 
        console.log(formData);
        // console.log(log);
        // const stored = JSON.parse(localStorage.getItem("recycleLog")) || [];
        // stored.push(log)
        // localStorage.setItem("recycleLog", JSON.stringify(stored))
        setFormData({});
    };

    const editMode = (id)=>{
        const item = data.find((d)=> d.id === id);
        if (item){
            setFormData(item);
            setEditingId(id);
        }
    };

    const deleteItem =(id)=>{
        setData((prev)=> prev.filter((item)=>item.id !== id));

        if(editingId === id){
            setEditingId(null);
            setFormData({});
        }
    };

    


    return {
        handleData,
        handleSubmit,
        formData,
        data,
        editMode,
        editingId,
        deleteItem
    };
}
