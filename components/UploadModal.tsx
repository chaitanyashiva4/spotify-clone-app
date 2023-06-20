"use client"

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const UploadModal = () =>{
    const uploadModal = useUploadModal();
    const {register,handleSubmit,reset} = useForm<FieldValues>({
        defaultValues:{
            author:'',
            title:'',
            song:null,
            image:null
        }
    })

    const onChange = (open:boolean) =>{
        if(!open){
            reset()
            uploadModal.onClose();
        }
    }
    return(
        <Modal title="Add a song" description="Upload an mp3 file" isOpen={uploadModal.isOpen} onChange={onChange}>
            Upload Content
        </Modal>
    )
}

export default UploadModal;