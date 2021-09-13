import { useEffect, useState } from 'react'
import './style.css'

const Students = ({ students, welcomeScreenOn, setWelcomeScreenOn }) => {

    const [pickedStudents, setPickedStudents] = useState([]);

    function randomNumber(arrayLength) {
        let result = Math.floor(Math.random() * arrayLength);

        return result;
    }

    function pick3() {
        let randomStudents = [];
        let randomPickOne = students.filter((students) => {
            return students.house === "Gryffindor"
        })
        let randomPickTwo = students.filter((students) => {
            return students.house === "Slytherin"
        })
        let randomPickThree = students.filter((students) => {
            return students.house === "Hufflepuff" || students.house === "Ravenclaw"
        })

        randomStudents.push(randomPickOne[randomNumber(randomPickOne.length)], randomPickTwo[randomNumber(randomPickTwo.length)], randomPickThree[randomNumber(randomPickThree.length)]);


        setPickedStudents(randomStudents)

    }

    useEffect(() => {
        return pick3()
    }, [welcomeScreenOn])




    return (
        <div className="containerCard">
            <div className="cards">
                {pickedStudents.map((student) => {
                    return (<div className="card"><img src={student.image} alt="Foto personagem" />
                        <h2>Personagem: {student.name}</h2>
                        <h2>Casa: {student.house}</h2>
                        <h2>Ator: {student.actor}</h2>

                    </div>
                    )
                })}
            </div>
            <button onClick={() => { return setWelcomeScreenOn(true) }}>Tentar novamente!</button>
        </div >
    )
}

export default Students;