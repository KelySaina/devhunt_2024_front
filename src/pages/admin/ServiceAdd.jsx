import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import ServicesService from "../../services/ServicesService";
import toast from "react-hot-toast";
import Tesseract from 'tesseract.js';

function formatLabel(label) {
    if (!label) return '';

    const formattedName = label.replace(/([a-z])([A-Z])/g, '$1 $2');

    return formattedName
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function extractResourceName(apiEndpoint) {
    const startIndex = apiEndpoint.indexOf("/api/");
    let resourceName = "";

    if (startIndex !== -1) {
        const afterApi = apiEndpoint.slice(startIndex + "/api/".length);
        const nextSlashIndex = afterApi.indexOf("/");

        if (nextSlashIndex !== -1) {
            resourceName = afterApi.slice(0, nextSlashIndex);
        } else {
            resourceName = afterApi;
        }
    }

    return resourceName;
}

function verifyText(text) {
    if (!text) {
        return false;
    }

    const pattern_rep = /Repoblikan['‘’`]?[i|t] Madagasikara/i;
    const pattern_rep_one = /Repoblikan\s*Madagasikara/i;
    const pattern_kara = /KARA[-\s]?PANONDROM[-\s]?PIRENENA/i;

    return pattern_rep_one.test(text) || pattern_rep.test(text) || pattern_kara.test(text);
}

function verifyResidence(text) {
    if (!text) {
        return false;
    }

    const pattern = /CERTIFICAT DE RESIDENCE/i;
    
    return pattern.test(text);
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
            const user = JSON.parse(localStorage.getItem('user'));
            const data = {
                values: {
                    ...values,
                    user_id: user.user_id
                }
            };
            try {
                await ServicesService.submitForService(data.values, JSON.parse(localStorage.getItem('service')).api_url, JSON.parse(localStorage.getItem('service')).service_id, user.user_id);
                toast.success('Votre demande a été soumise avec succès.');
            } catch (error) {
                console.error('Une erreur s\'est produite, veuillez réessayer.');
            }
        },
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [verifiedText, setVerifiedText] = useState(false);

    const [selectedImageCin, setSelectedImageCin] = useState(null);
    const [isProcessingCin, setIsProcessingCin] = useState(false);
    const [verifiedTextCin, setVerifiedTextCin] = useState(false);

    // for tax
    const handleImageUpload = async (event) => {
        const image = event.target.files[0];
        setSelectedImage(null);
        setVerifiedText(false);
        setSelectedImage(URL.createObjectURL(image));

        if (URL.createObjectURL(image)) {
            try {
                setIsProcessing(true);
                const result = await Tesseract.recognize(URL.createObjectURL(image));
                var isCin = false;
                result.data.lines.forEach((line) => {
                    if (verifyText(line.text)) {
                        console.log(line.text);
                        setVerifiedText(true);
                        isCin = true;
                        toast.success("Carte d'identidé valide")
                    }
                });
                if (!isCin) {
                    setVerifiedText(false)
                    toast.error("Carte d'identité non valide, veuiller réessayer avec une aute")
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsProcessing(false);
            }
        }
    };

    // for cin
    const handleImageUploadCin = async (event) => {
        const image = event.target.files[0];
        setSelectedImageCin(null);
        setVerifiedTextCin(false);
        setSelectedImageCin(URL.createObjectURL(image));

        if (URL.createObjectURL(image)) {
            try {
                setIsProcessingCin(true);
                const result = await Tesseract.recognize(URL.createObjectURL(image));
                var isResidence = false;
                result.data.lines.forEach((line) => {
                    if (verifyResidence(line.text)) {
                        console.log(line.text);
                        setVerifiedTextCin(true);
                        isResidence = true;
                        toast.success("Certificat de résidence valide")
                    }
                });
                if (!isResidence) {
                    setVerifiedTextCin(false)
                    toast.error("Certificat de résidence non valide, veuiller réessayer avec une aute")
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsProcessingCin(false);
            }
        }
    };

    return (
        <div className="space-y-7">
            <div className="space-y-2">
                <h1 className='text-4xl first-letter:text-5xl font-bold'>{service.name}</h1>
                <p className="text-xl">{service.description}</p>
            </div>
            <hr />
            <div className="grid grid-cols-2">
                {
                    extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) === 'tax' &&
                    <div className="space-y-5">
                        <h1 className="text-xl font-bold">Verification identité requis</h1>
                        <div className="flex justify-between items-center">
                            <label>Uploader votre carte d'identité national</label>
                            <input type="file" accept="image/*" className="file-input w-full max-w-xs" onChange={handleImageUpload} />
                        </div>
                        <div className="flex justify-center">
                            {selectedImage && <img className={`w-1/2 ${isProcessing && 'animate-pulse'}`} src={selectedImage} alt="Selected" />}
                        </div>
                    </div>
                }
                {
                    extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) === 'cin' &&
                    <div className="space-y-5">
                        <h1 className="text-xl font-bold">Verification de residence requis</h1>
                        <div className="flex justify-between items-center">
                            <label>Uploader votre certificat de residence</label>
                            <input type="file" accept="image/*" className="file-input w-full max-w-xs" onChange={handleImageUploadCin} />
                        </div>
                        <div className="flex justify-center">
                            {selectedImageCin && <img className={`w-1/2 ${isProcessingCin && 'animate-pulse'}`} src={selectedImageCin} alt="Selected" />}
                        </div>
                    </div>
                }
                <div className="space-y-5">
                    <div>
                        <h1 className="text-xl font-bold">Remplissez le formulaire ci-dessous</h1>
                    </div>
                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-4 gap-4">
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
                            {
                                extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) === 'tax' &&
                                <button disabled={!verifiedText} type="submit" className="btn btn-success">
                                    Envoyer
                                </button>
                            }
                            {
                                extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) === 'cin' &&
                                <button disabled={!verifiedTextCin} type="submit" className="btn btn-success">
                                    Envoyer
                                </button>
                            }
                            {
                                extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) != 'tax' && extractResourceName(JSON.parse(localStorage.getItem('service')).api_url) != 'cin' &&
                                <button type="submit" className="btn btn-success">
                                    Envoyer
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ServiceAdd;
