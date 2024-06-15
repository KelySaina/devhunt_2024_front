import React from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Index = () => {
    const queryClient = new QueryClient();
    const location = useLocation();
    const navigate = useNavigate();

    const isSuper = localStorage.getItem('user') == 'super'

    const handleLogtOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }

    useEffect(() => {
        if (!localStorage.getItem('token') && !localStorage.getItem('user')) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='grid grid-cols-8'>
            <div className='col-span-1 space-y-24 shadow-lg h-screen'>
                <div className='flex flex-col gap-8 justify-center items-center h-[20%] mt-8'>
                    <svg className='w-28 fill-success' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fillRule="evenodd"
                            d="M13.75.5a2.25 2.25 0 00-1.847 3.536l-.933.934a.752.752 0 00-.11.14c-.19-.071-.396-.11-.61-.11h-2.5A1.75 1.75 0 006 6.75v.5H4.372a2.25 2.25 0 100 1.5H6v.5c0 .966.784 1.75 1.75 1.75h2.5c.214 0 .42-.039.61-.11.03.05.067.097.11.14l.933.934a2.25 2.25 0 101.24-.881L12.03 9.97a.75.75 0 00-.14-.11c.071-.19.11-.396.11-.61v-2.5c0-.214-.039-.42-.11-.61a.75.75 0 00.14-.11l1.113-1.113A2.252 2.252 0 0016 2.75 2.25 2.25 0 0013.75.5zM13 2.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM7.75 6.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25h-2.5zm6 6a.75.75 0 100 1.5.75.75 0 000-1.5zM1.5 8A.75.75 0 113 8a.75.75 0 01-1.5 0z"
                            clipRule="evenodd" />
                    </svg>
                    <label className='text-xl font-bold'>Citizen<span className='text-success'>Connect</span></label>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        isSuper ?
                            <Link to="/admin/super" className={`${location.pathname == '/admin/super' && 'text-success bg-success/10'}  py-5 flex gap-2 items-center justify-between px-5 cursor-pointer group`}>
                                <label className={`text-base font-semibold cursor-pointer group-hover:text-success duration-200`}>Setting</label>
                                <svg className={`w-8 group-hover:scale-125 group-hover:text-success group-hover:animate-pulse duration-500 ease-in-out`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                            </Link>
                            :
                            <>
                                <Link to="/admin/" className={`${(location.pathname == '/admin/' || location.pathname == '/admin/service') && 'text-success bg-success/10 '} py-5 flex gap-2 items-center justify-between px-5 cursor-pointer group`}>
                                    <label className={`text-base font-semibold cursor-pointer group-hover:text-success duration-200`}>Service</label>
                                    <svg className={`w-8 group-hover:scale-125 group-hover:text-success group-hover:rotate-180 duration-500 ease-in-out`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </Link>
                                <Link to="/admin/docs" className={`${location.pathname == '/admin/docs' && 'text-success bg-success/10 '} py-5 flex gap-2 items-center justify-between px-5 cursor-pointer group`}>
                                    <label className={`text-base font-semibold cursor-pointer group-hover:text-success duration-200`}>Documents</label>
                                    <svg className={`w-8 group-hover:scale-125 group-hover:text-success duration-500 ease-in-out`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>
                                </Link>
                                <Link to="/admin/setting" className={`${location.pathname == '/admin/setting' && 'text-success bg-success/10'}  py-5 flex gap-2 items-center justify-between px-5 cursor-pointer group`}>
                                    <label className={`text-base font-semibold cursor-pointer group-hover:text-success duration-200`}>Setting</label>
                                    <svg className={`w-8 group-hover:scale-125 group-hover:text-success group-hover:animate-pulse duration-500 ease-in-out`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                    </svg>
                                </Link>
                            </>
                    }
                </div>
                <div onClick={handleLogtOut} className='flex items-center gap-5 justify-center cursor-pointer hover:text-error hover:scale-110 duration-100'>
                    <label className='text font-semibold cursor-pointer'>Déconnexion</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='col-span-7 p-8'>
                <QueryClientProvider client={queryClient}>
                    <Outlet />
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default Index