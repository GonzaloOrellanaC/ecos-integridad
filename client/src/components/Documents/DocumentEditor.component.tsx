import { useDocumentContext } from "../../context/Document.context";

export const DocumentEditorComponent = () => {
    const {urlDocEdit} = useDocumentContext()

    return (
        <div style={{height: 'calc(100vh - 61px)'}}>
            {
                urlDocEdit &&
                <iframe src={urlDocEdit} width="100%" height="100%" style={{padding: 0}} id={'docFrame'} />
            }
            
        </div>
    )
}