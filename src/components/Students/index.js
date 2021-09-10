import { useEffect, useState } from 'react'
import './style.css'

const Students = ({ students }, { welcomeScreenOn }) => {

    const [pickedStudents, setPickedStudents] = useState([]);

    function pick3() {
        for (let i = 0; i <= 3; i++) {
            // let randomPick = Math.floor(Math.random() * 11);

            setPickedStudents([...pickedStudents, students[Math.floor(Math.random() * 11)]])
        }

    }

    useEffect(() => {
        return pick3()
    }, [welcomeScreenOn])


    return (
        <div className="card">
            {pickedStudents.map((student) => {
                return (<div><img src={student.image} alt={student.name} />
                    <h2>{student.name}</h2>
                    <h2>{student.house}</h2>
                    <h2>{student.actor}</h2>

                </div>
                )
            })}
        </div>
    )
}

export default Students;