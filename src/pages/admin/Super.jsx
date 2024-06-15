import React from 'react'
import ServicesService from '../../services/ServicesService';
import { useQuery } from '@tanstack/react-query';

const getServices = async () => {
  return await ServicesService.getServicesDirect();
}

const Super = () => {
  const {
    isPending: servicePending,
    error: serviceError,
    data: services,
    refetch: refetchServices
  } = useQuery({
    queryFn: () => getServices(),
    staleTime: 1000 * 60 * 5,
  })

  const handleUpdateState = async (service_id, state) => {
    try {
      await ServicesService.updateState(service_id, state);
      refetchServices();
    } catch (error) {
      console.error('Failed to update service:', error.message);
    }
  }
  return (
    <div className='space-y-7'>
      <div>
        <h1 className='text-4xl first-letter:text-5xl font-bold'>Gestion de service</h1>
      </div>
      {
        servicePending &&
        <div className="flex flex-col gap-4 w-52">
          <div className="skeleton h-52 w-96"></div>
        </div>
      }
      <div className='flex gap-5'>
        {
          services && services.map((service) => (
            <div key={service.service_id} className="card duration-100 w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className='flex justify-between items-center'>
                  <h2 className="card-title text-2xl capitalize">{service.name}</h2>
                  <div className="badge badge-primary">{service.state}</div>
                </div>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  {service.state === "active"
                    ?
                    <button onClick={() => handleUpdateState(service.service_id, 'inactive')} className="btn btn-error text-white">Desactiver</button>
                    :
                    <button onClick={() => handleUpdateState(service.service_id, 'active')} className="btn btn-success text-white">Activer</button>
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Super