import './style.css'
import react, {useState} from 'react'

export function AdicionarAluno(){
    const [students, setStudents] = useState()
    const [studentsList, setStudentsList] = useState([])
    function getNameList(){
        setStudentsList([students])
    }
    

    

      
      
      

    return(
        <>

            <section className='containAdiciona'>
                <h1 id='textListaDePresenca'>LISTA DE PRESENÇA</h1>
                <form  className='containAdiciona' >
                    <input 
                    id='inputAdicionaAluno'
                     type='text' 
                     name='adiciona' 
                     placeholder='Digite o nome de um aluno presente'
                     onChange={(e)=>{
                        setStudents(e.target.value)
                     }}
                     ></input>
                    <button 
                    id='buttonAdicionar' 
                    type='submit'
                    onClick={getNameList}
                    >Adicionar Aluno</button>
                    
                </form>
            
                <ul>
                    <li></li>
                  {/* {
                    studentsList.map((student)=>{
                        <li>{student}</li>
                    })
                  } */}
                </ul>
                
                
                
                
            </section>
        </>
    )
}