
import { useState, useEffect } from 'react';
import profile from '../undefined.jpg';
import nature from '../nature.png';
import { toast, ToastContainer } from 'react-toastify';
import { PieChart } from '@mui/x-charts/PieChart';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import Stars from './Stars';
// const { id }= useParams();
function Front() {
    const notify = () => {
        setTimeout(() => {
            toast.warning("Wait while we are Making it good", {
                position: "top-center"
            });
        }, 500);
        setTimeout(() => {
            toast.warning("1", {
                position: "top-center"
            });
        }, 3000);
        setTimeout(() => {
            toast.warning("2", {
                position: "top-center"
            });
        }, 5000);
        setTimeout(() => {
            toast.warning("3", {
                position: "top-center"
            });
        }, 7000);
        setTimeout(() => {
            setstar(true);
        }, 12000);
        setTimeout(() => {
            setstar(false);
        }, 18000);

    };

    function changehandler(event) {
        const selectedFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(selectedFile);
        setImage(imageUrl);
    }
    const [image, setImage] = useState(null);
    const [mongoData, setMongoData] = useState([]);
    const [loading, setloading] = useState(false);
    const [star, setstar] = useState(false);
    const [refreshData, setRefreshData] = useState(false);
    const [updatedId, setUpdatedId] = useState('');
    const [Listcount, setListcount] = useState(0);
    const [data, setdata] = useState({
        name: '',
        age: '',
        status: false
    });
    const [Updatedata, setUpdatedata] = useState({
        name: '',
        age: '',
        status: false
    });
    useEffect(() => {
        setloading(true);
        axios
            .get('http://localhost:8000/users')
            .then((response) => {
                setMongoData(response.data);
                setloading(false);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                setloading(true);
            });

    }, [refreshData]);
    // A change in the supplied parameter will refresh the useeffect

    function nameMongo(event) {
        const newName = event.target.value;
        setdata(prevData => ({
            ...prevData,
            name: newName
        }));

    }
    function ageMongo(event) {
        const newName = event.target.value;
        setdata(prevData => ({
            ...prevData,
            age: newName
        }));

    }
    function statusMongo(event) {
        const checked = event.target.checked;
        setdata(prevData => ({
            ...prevData,
            status: checked
        }));
    }

    function sendDataToServer() {

        axios
            .post('http://localhost:8000/users', data)
            .then(() => {
                console.log("Data submitted", data);
                setRefreshData(prev => !prev);
                setdata({ name: '', age: '', status: false });
            })
            .catch((error) => {
                console.log(error);
            })

    }
    function DeleteDataToServer(id) {

        axios
            .delete(`http://localhost:8000/users/${id}`)
            .then(() => {
                console.log("Data deleted", data);
                setRefreshData(prev => !prev);

            })
            .catch((error) => {
                console.log(error);
            })

    }
    function EditDataToServer(index) {
        const Userid = mongoData[index]._id; // This is a little tricky
        axios
            .put(`http://localhost:8000/users/${Userid}`, Updatedata)
            .then(() => {
                console.log("Data Edited", data);
                setRefreshData(prev => !prev);
                setUpdatedata({ name: '', age: '', status: false });
                setUpdatedId('');

            })
            .catch((error) => {
                console.log(error);
            })

    }

    function buttonhandler() {
        const namedata = data.name;
        const agedata = data.age;
        const lengthage = agedata.length;
        const lengthname = namedata.length;

        if (lengthname > 13) {
            toast.warning("Name should be in less than 13 characters", { position: "top-center" })
        }
        if (lengthname == 0) {
            toast.warning("Name cannot be left empty", { position: "top-center" })
        }
        else if (lengthage > 2 || lengthage == 0) {

            toast.warning("Invalid age", { position: "top-center" })
        }
        else {
            // console.log(data.name, data.age, data.status);
            sendDataToServer();
        }

    }

    function EditSubmithandler() {
        const updatedname = Updatedata.name;
        const updatedage = Updatedata.age;
        const lengthupdatedname = updatedname.length;
        const lengthupdatedage = updatedage.length;
        if (lengthupdatedname > 13) {
            toast.warning("Name should be in less than 13 characters", { position: "top-center" })
        }
        if (lengthupdatedname == 0) {
            toast.warning("Name cannot be left empty", { position: "top-center" })
        }
        else if (lengthupdatedage > 2 || lengthupdatedage == 0) {

            toast.warning("Invalid age", { position: "top-center" })
        }
        else {
            // console.log(data.name, data.age, data.status);
            EditDataToServer(updatedId - 1);
        }
    }

    useEffect(() => { setListcount(mongoData.length); }, [mongoData]);
    return (
        <div className=''>

            <div className='flex flex-wrap'>
                <div>
                    <div className=' h-auto'>
                        <div className=' w-[38vh] shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] my-4 h-auto '>
                            <div className='   p-4 flex text-left  font-medium'>
                                <img src={image ? image : profile} className=' rounded-full w-[9vh] h-[9vh]'></img>
                                <label className=' w-[9vh] h-[9vh] bg-transparent cursor-pointer absolute '><input type='file' className='hidden'></input></label>
                                <div className='block'>
                                    <h1 className='  px-4 pt-4 text-black'>Anant Shah</h1>
                                    <h1 className='px-4 m-0 text-blue-400 opacity-4'>React Developer</h1>
                                </div>
                            </div>
                            <div className='block text-left  font-medium px-4 w-[270px] pb-3'>
                                <h1 className=''>Brewing magic, designing and building real world solutions</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' h-auto'>
                    <div className=' w-[37vh] shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] my-4  h-auto '>

                        <div className=' pb-0 pt-4 pr-4 pl-4  sm:p-4 flex text-left  font-medium'>
                            <img src={profile} className=' rounded-full w-[9vh] h-[9vh]'></img>
                            <div className='block'>
                                <h1 className='  px-4 pt-4 text-black'>Mr. Shah</h1>
                                <h1 className='px-4 m-0 text-red-400 opacity-4'>CEO</h1>
                            </div>
                        </div>
                        <div className='block text-left  font-medium px-4 w-[270px] pb-3'><h1>I lead with a passion for innovation . With 20 years in tech, I drive our mission for global impact and customer satisfaction.</h1></div>

                    </div>
                </div>

                <div className=' h-auto'>
                    <div className=' w-[30vh] shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] my-4 h-auto '>
                        <div className='  pt-4 pr-4 pl-4 pb-2 '>
                            <img src={nature} className=' rounded-xl  overflow-hidden h-[80px] w-[200px]' ></img>
                        </div>
                        <div className='pb-3'>
                            <h1 className='px-4 w-auto font-medium text-center '>The Mountain moves when the one calls</h1>
                        </div>
                    </div>
                </div>

                <div className=' h-auto'>
                    <div className=' w-[30vh] shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] my-4 h-auto '>
                        <div className='p-4'>
                            <div className='flex justify-center'>
                                <div className=' h-14 w-[15px] mx-[10px] bg-green-600 rounded-md '><div className=' h-10 w-[15px]  bg-blue-600 rounded-md '></div></div>
                                <div className=' h-14 w-[15px] mx-[10px] bg-green-600 rounded-md '><div className=' h-6 w-[15px]  bg-blue-600 rounded-md  '></div></div>
                                <div className=' h-14 w-[15px] mx-[10px] bg-green-600 rounded-md'><div className=' h-9 w-[15px]  bg-blue-600 rounded-md'></div></div>
                                <div className=' h-14 w-[15px] mx-[10px] bg-green-600 rounded-md'><div className=' h-0 w-[15px]  bg-blue-600 rounded-md'></div></div>
                                <div className=' h-14 w-[15px] mx-[10px] bg-green-600 rounded-md'><div className=' h-5 w-[15px]  bg-blue-600 rounded-md'></div></div>
                            </div>
                            <div className='flex font-medium text-[10px] justify-center my-2'>
                                <h1 className='mx-[7px]'>23%</h1>
                                <h1 className='mx-[7px]'>67%</h1>
                                <h1 className='mx-[7px]'>30%</h1>
                                <h1 className='mx-[7px]'>100%</h1>
                                <h1 className='mx-[7px]'>78%</h1>
                            </div>
                            <div className=' font-medium text-[14px] mx-1 mt-2 flex justify-center'>
                                23 + 67 + 30 + 100 + 78
                            </div>
                            <div className='w-auto h-[2px] bg-black  opacity-60'></div>
                            <div className='font-medium text-[14px] mx-1 flex justify-center'>5</div>
                        </div>
                    </div>
                </div>


                <div className=' h-auto'>
                    <div className=' w-[38vh] shadow-2xl  rounded-2xl  mx-4 bg-[#EEEEEE] my-4 h-auto '>
                        <div className='p-4'>
                            <div className=' flex '>
                                <h1 className='font-medium w-[180px]'>Press this button to make everything good.</h1>

                                <button className='w-[50px] h-[50px] bg-orange-500  rounded-[15px] mx-2 hover:bg-[#31363F] font-medium hover:text-white' onClick={notify}></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div className='flex flex-wrap'>
                <div className=' max-h-[65vh]'>
                    <div className=' bg-[#EEEEEE] w-[67vh]  max-h-[59.15vh] overflow-hidden mx-4 rounded-2xl shadow-2xl p-4 my-4'>
                        {loading ? (<div className='flex justify-center'><Spinner /></div>) : (
                            <div>
                                {mongoData.map((data, index) => {

                                    return (
                                        <div key={data._id} className='flex my-1 text-white font-medium items-center'>
                                            <div className='flex rounded-xl  px-3 mx-2 py-[2px] bg-sky-600 w-[35px]'>{index + 1}</div>
                                            <div className='flex rounded-xl px-3 mx-2 py-[2px] bg-sky-600 w-[150px]'>{data.name}</div>
                                            <div className='flex rounded-xl px-3 py-[2px] mx-2 bg-sky-600 w-[42px]'>{data.age}</div>
                                            <div className='flex rounded-xl px-3 py-[2px] mx-2 bg-sky-600 w-[85px]'>{String(data.status)}</div>
                                            <button className=' focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 py-[2px] focus:ring-red-300 font-medium rounded-2xl dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mx-2 px-3' onClick={() => DeleteDataToServer(data._id)}>Delete</button>

                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <div className=' h-auto my-4'>
                        <div className=' bg-[#EEEEEE] max-w-[67vh] h-auto mx-4 rounded-2xl shadow-2xl p-4'>
                            <div className=''>
                                <div className='flex justify-between my-2'>
                                    <label className='font-medium mx-2 ' >Name</label>
                                    <input type='text' className='w-[50vh] mx-2 rounded-md px-1 font-mono' onChange={nameMongo} value={data.name}></input>
                                </div>
                                <div className='flex justify-between my-2'>
                                    <label className='font-medium mx-2 ' >Age</label>
                                    <input type='text' className='w-[50vh] mx-2 rounded-md px-1 font-mono' onChange={ageMongo} value={data.age}></input>
                                </div>
                            </div>
                            <div className=' flex  justify-between'>
                                <div className=' flex  '>
                                    <label className='font-medium mx-2 ' >Active</label>
                                    <input type='checkbox' className='mx-2 rounded-md px-1 font-mono w-4 h-[3.8vh]' onChange={statusMongo} checked={data.status}></input>
                                </div>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-sm px-4  me-2 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={buttonhandler}>Create</button>
                            </div>
                        </div>
                    </div>


                    <div className=' h-auto my-4'>
                        <div className=' bg-[#EEEEEE] max-w-[64vh] h-auto mx-4 rounded-2xl shadow-2xl p-4'>
                            <div className=''>
                                <div className='flex justify-between my-2'>
                                    <label className='font-medium mx-2 ' >Name</label>
                                    <input type='text' className='w-[50vh] mx-2 rounded-md px-1 font-mono' value={Updatedata.name} onChange={(e) => setUpdatedata((prevData) => ({ ...prevData, name: e.target.value }))}></input>
                                </div>
                                <div className='flex justify-between my-2'>
                                    <label className='font-medium mx-2 ' >Age</label>
                                    <input type='text' className='w-[50vh] mx-2 rounded-md px-1 font-mono' value={Updatedata.age} onChange={(e) => setUpdatedata((prevData) => ({ ...prevData, age: e.target.value }))}></input>
                                </div>
                                <div className='flex justify-between my-2'>
                                    <label className='font-medium mx-2 ' >ID</label>
                                    <input type='number' className='w-[50vh] mx-2 rounded-md px-1 font-mono' value={updatedId} onChange={(e) => setUpdatedId(e.target.value)}></input>
                                </div>
                            </div>
                            <div className=' flex  justify-between'>
                                <div className='flex'>
                                    <label className='font-medium mx-2 ' >Active</label>
                                    
                                    <input type='checkbox' className='mx-2 rounded-md px-1 font-mono w-4 h-[3.8vh]' checked={Updatedata.status} onChange={(e) => setUpdatedata((prevData) => ({ ...prevData, status: e.target.checked }))}></input>
                                </div>
                                <button type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-md  text-sm px-4  me-2 py-1.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800" onClick={EditSubmithandler}>Update</button>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="h-auto">
                    <div className=' bg-[#EEEEEE] py-2 rounded-2xl pr-4'>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: Listcount, label: 'Data count' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            width={360}
                            height={200}
                        />
                    </div>
                </div>

            </div>

            {star && <Stars />}

            <div>

            </div>

            <ToastContainer theme='dark' />

        </div >
    )
}

export default Front
