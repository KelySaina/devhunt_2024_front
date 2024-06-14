import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import ServicesService from "../../services/ServicesService";

function formatLabel(label) {
    if (!label) return '';

    const formattedName = label.replace(/([a-z])([A-Z])/g, '$1 $2');

    return formattedName
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

const ServiceAdd = () => {
    const [service, setService] = useState({
        name: localStorage.getItem('service') ? JSON.parse(localStorage.getItem('service')).name : '',
        description: localStorage.getItem('service') ? JSON.parse(localStorage.getItem('service')).description : '',
    });

    const [docsReq, setDocsReq] = useState([]);

    useEffect(() => {
        const storedService = localStorage.getItem('service');
        if (storedService) {
            const { name, description, documents } = JSON.parse(storedService);
            setService({ name, description });
            setDocsReq(documents ? documents.split(',') : []);
        }
    }, []);

    const validationSchema = Yup.object().shape(
        docsReq.reduce((schema, doc) => {
            schema[doc] = Yup.string().required(`Le champ ${formatLabel(doc)} est obligatoire`);
            return schema;
        }, {})
    );

    const initialValues = docsReq.reduce((fields, doc) => {
        fields[doc] = '';
        return fields;
    }, {});

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await ServicesService.submitForService(values, JSON.parse(localStorage.getItem('service')).api_url);
            } catch (error) {
                console.error('Une erreur s\'est produite, veuillez réessayer.');
            }
        },
    });
    return (
        <div className="space-y-5">
            <div className="space-y-2">
                <h1 className='text-4xl first-letter:text-5xl font-bold'>{service.name}</h1>
                <p className="text-lg">{service.description}</p>
            </div>
            <div>
                <h1 className="text-xl font-bold">Remplissez le formulaire ci-dessous</h1>
            </div>
            <div>
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-4 space-y-2">
                        {docsReq.map((doc, index) => (
                            <label key={index} className="form-control w-full max-w-xs">
                                <div className="flex justify-between">
                                    <span className="label-text">{formatLabel(doc)}</span>
                                    {formik.errors[doc] && (
                                        <div className="text-xs text-error">{formik.errors[doc]}</div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    placeholder={doc}
                                    className={`input input-bordered w-full max-w-xs ${formik.errors[doc] ? "border-error focus-visible:ring-error" : ""}`}
                                    {...formik.getFieldProps(doc)}
                                />
                            </label>
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-success">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ServiceAdd;
