import React,{useState,useEffect} from 'react'

const ApiRickAndMorty = () => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        getPersonajes()
    }, [])

    const getPersonajes = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setPersonajes(data.results)       
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        
        <h3>Personajes</h3>
        <div className='container py-5'>
        <h1 className='text-center py-5'>ApiRickAndMorty</h1>
        <div className='row'>
            {
                personajes.map((item) => (
                    <div className='col-md-3' key={item.id}>
                        <div className='card mt-5'>
                            <img src={item.image} alt={item.name} className='card-img-top' />
                            <div className='card-body pie-cards'>
                                <h5 className='card-title'>{item.name}</h5>
                                <p className='card-text'>{item.species}</p>
                                <br />
                                <p className='card-text'>{item.status}</p>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        {/* <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    personajes.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td><img src={item.image} alt={item.name} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */}
       {/*  {
            personajes.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <img src={item.image} alt={item.name} />
                </div>
            ))
        } */}
        {/* <ul>
            {
                personajes.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul> */}

    </div>
  )
}

export default ApiRickAndMorty