import { useLoaderData } from 'react-router-dom';
import Toycart from './Toycart';

const Alltoy = () => {
    const toys = useLoaderData();
    return (
        <div>
            <h1>{toys.length}</h1>
          <div className='flex flex-wrap container mx-auto gap-4 justify-around p-6 bg-gray-800'>
          {
                toys.map(toy => <Toycart
                key={toys._id}
                toy={toy}
                
                >

                </Toycart>)
            }
          </div>
        </div>
    );
};

export default Alltoy;