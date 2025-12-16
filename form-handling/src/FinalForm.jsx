import React, { useState } from 'react'

const FinalForm = () => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title, details);

        const copyTask = [...task];
        copyTask.push({ title, details });
        setTask(copyTask);

        setTitle("");
        setDetails("");
    }

    const deleteNote = (idx) => {
        const copyTask = [...task];   
        copyTask.splice(idx, 1);
        setTask(copyTask);      
    }

    return (
        <div className='h-screen bg-black text-white flex flex-col lg:flex-row'>

            <form className='flex lg:w-1/2 gap-5 flex-col items-start justify-between p-10'
                onSubmit={submitHandler}
            >
                <h1 className='text-4xl font-bold'>Add Notes</h1>

                <input
                    className='font-medium border-2 w-full text-white outline-none px-5 py-2 rounded'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder='enter task'
                />

                <textarea
                    className='font-medium border-2 w-full h-32 text-white outline-none px-5 py-2 rounded'
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder='enter in detail'
                />

                <button
                    className='font-medium active:scale-95 bg-white w-full outline-none text-black px-5 py-2 rounded'
                >
                    Add Notes
                </button>
            </form>

            <div className='lg:w-1/2 p-10 lg:border-l-2'>
                <h1 className='text-3xl font-bold'>Resent Notes</h1>

                <div className='flex flex-wrap justify-start items-start gap-5 mt-6 h-full overflow-auto p-4'>
                    {
                        task.map((elem, idx) => {
                            return (
                                <div 
                                    key={idx} 
                                    className="h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] text-black px-4 py-9 pb-5 relative break-all flex justify-between flex-col items-start" >
                                  <div>
                                      <h3 className='leading-tight text-xl font-bold'>
                                        {elem.title}
                                    </h3>
                                    <p className='mt-4 leading-tight font-medium text-gray-700'>
                                        {elem.details}
                                    </p>
                                  </div>
                                  <button onClick={() => deleteNote(idx)} className='w-full py-1 text-xs rounded font-bold bg-red-400 cursor-pointer active:scale-95 text-white'>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default FinalForm