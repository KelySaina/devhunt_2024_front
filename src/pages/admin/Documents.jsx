import { useQuery } from "@tanstack/react-query";
import DocumentService from "../../services/DocumentService";
import { format, parseISO, formatDistanceToNow } from 'date-fns';
import Chart from 'react-apexcharts'
import { useState } from "react";
import { useEffect } from "react";

const getDocs = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return await DocumentService.getUserDocs(user.user_id);
}

function formatDate(dateString) {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, "dd MM yyyy HH:mm");
}

const Documents = () => {
    const {
        isPending: docPending,
        error: docError,
        data: docs,
    } = useQuery({
        queryFn: () => getDocs(),
        staleTime: 1000 * 60 * 5,
    })

    const [chartData, setChartData] = useState({ labels: [], series: [] });
    useEffect(() => {
        const countServiceOccurrences = () => {
            const serviceCounts = {};

            if (!docPending) {
                docs.forEach(item => {
                    const serviceName = item.state.trim();
                    if (serviceCounts[serviceName]) {
                        serviceCounts[serviceName]++;
                    } else {
                        serviceCounts[serviceName] = 1;
                    }
                });

            }
            const labels = Object.keys(serviceCounts);
            const series = labels.map(label => serviceCounts[label]);

            console.log(labels);
            console.log(series);

            return { labels, series };
        };

        const { labels, series } = countServiceOccurrences();

        setChartData({ labels, series });
    }, [docs]);

    const chartOptions = {
        labels: chartData.labels
    };
    return (
        <div className="space-y-7">
            <div>
                <h1 className='text-4xl first-letter:text-5xl font-bold'>Vos rêquetes</h1>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div className="overflow-x-auto col-span-2">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nom du service</th>
                                <th>Date</th>
                                <th>Etat du dossier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                docPending &&
                                <tr>
                                    <td colSpan="4">
                                        <div className="flex justify-center">
                                            <span className="loading loading-dots loading-md"></span>
                                        </div>
                                    </td>
                                </tr>
                            }
                            {
                                docs?.map((doc, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td className="capitalize">{doc.services.name}</td>
                                            <td>
                                                <div className="flex justify-between">
                                                    <div>
                                                        {formatDate(doc.accessed_at)}
                                                    </div>
                                                    <div className="badge badge-primary">
                                                        {formatDistanceToNow(new Date(doc.accessed_at || new Date()), { includeSeconds: true, addSuffix: true })}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right capitalize">{doc.state}</td>
                                        </tr>
                                    )
                                })
                            }
                            {
                                !docPending && docs.length == 0 &&
                                <tr>
                                    <td colSpan="4">
                                        <div className="flex justify-center">
                                            No data yet
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Chart options={chartOptions} series={chartData.series} type="donut" height={350} />
                </div>
            </div>
        </div>
    )
}

export default Documents