import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect, useState } from "react"

export const PatternPage = () => {
    const [pattern, setPattern] = useState<any>()

    const [borders, setBorders] = useState({
        width: '1px',
        color: '#ccc',
        style: 'solid'
    })

    const [newPattern, setNewPattern] = useState<any>()

    useEffect(() => {
        setPattern(
            {
                header: {
                    name: 'Encabezado',
                    description: '',
                    list: [
                        {
                            type: 'string',
                            width: 4,
                            text: false,
                            image: true,
                            alignment: 'center',
                            name: 'Imagen'
                        },
                        {
                            type: 'string',
                            autoGrow: true,
                            width: 6,
                            text: true,
                            image: false,
                            alignment: 'center',
                            name: 'Título'
                        },
                        {
                            type: 'string',
                            autoGrow: true,
                            width: 2,
                            text: true,
                            image: false,
                            alignment: 'center',
                            name: 'Detalle'
                        }
                    ]
                }
            }
        )
    }, [])

    const addItemPattern = (value: string, name: string, description: string) => {
        const patternCache = {...pattern}
        if (!patternCache[value]) {
            patternCache[value] = {}
        }
        const item = {
            name,
            description,
            list: []
        }
        patternCache[value] = item
    }

    const addElementItemPattern = (value: string, type: string, name: string, width: number, height: number) => {
        const patternCache = {...pattern}
        const item = {
            name,
            type,
            width,
            height
        }
        patternCache[value].list.push(item)
    }


    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Crear pauta
                </IonTitle>
            </IonToolbar>
        </IonHeader>
            <IonContent class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol sizeXl="2">
                            <IonButton>
                                Agregar Lista
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            {
                                pattern && Object.keys(pattern).map((key, index) => {
                                    console.log(key)
                                    return (
                                        <div key={index}>
                                            <h3>{pattern[key].name}</h3>
                                            <IonRow>
                                                {
                                                    pattern[key] && pattern[key].list && pattern[key].list.map((col: any, num: number) => {
                                                        return (
                                                            <IonCol key={`${key}_${index}_${num}`} size={col.width} style={{border: `${borders.width} ${borders.style} ${borders.color}`}}>
                                                                <div style={{padding: 10}}>
                                                                    {
                                                                        col.image
                                                                        ?
                                                                        <input type={'file'} />
                                                                        :
                                                                        col.text
                                                                        ?
                                                                        <IonItem>
                                                                            <IonTextarea
                                                                                autoGrow={col.autoGrow}
                                                                                labelPlacement={'floating'}
                                                                                label={col.name}
                                                                            />
                                                                        </IonItem>
                                                                        :
                                                                        null
                                                                    }
                                                                </div>
                                                            </IonCol>
                                                        )
                                                    })
                                                }
                                            </IonRow>
                                        </div>
                                    )
                                })
                            }
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}