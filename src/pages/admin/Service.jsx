import React from 'react'
import ServicesService from '../../services/ServicesService';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const getServices = async () => {
  return await ServicesService.getServices();
}
const Service = () => {
  const {
    isPending: servicePending,
    error: serviceError,
    data: services,
  } = useQuery({
    queryFn: () => getServices(),
    staleTime: 1000 * 60 * 5,
  })

  const navigate = useNavigate();
  const handleSubmitDoc = (service) => {
    localStorage.setItem('service', JSON.stringify(service))
    navigate('/admin/service')
  }

  return (
    <div className='space-y-7'>
      <div>
        <h1 className='text-4xl first-letter:text-5xl font-bold'>Liste des services diponibles</h1>
      </div>
      <div>
        {
          servicePending &&
          <div className="flex flex-col gap-4 w-52">
            <div className="skeleton h-52 w-96"></div>
          </div>
        }
        <div className='flex gap-5'>
          {
            services && services.map((service) => (
              <div key={service.service_id} className={`${service.state == 'inactive' && 'hidden'} card hover:shadow-success duration-100 w-96 bg-base-100 shadow-xl`}>
                <div className="card-body">
                  <h2 className="card-title text-2xl capitalize">{service.name}</h2>
                  <p>{service.description}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleSubmitDoc(service)} className="btn btn-success text-white">Regarder</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          !servicePending && services && services.length === 0 &&
          <div>
            <h1 className='text-2xl font-semibold'>No services found</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Service