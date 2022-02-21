import { FC } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';



export const ContactsMap: FC = () => {
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [56.826754, 60.616186], 
                    zoom: 17 
                }}
                className={'contacts__map'}
            >
                <Placemark
                    geometry={[56.826754, 60.616186]}               
                    options={{
                        iconImageSize: [60, 60],
                        iconLayout: 'default#image',
                        iconImageHref: './images/Map__placemark.png'
                    }}
                />
            </Map>
        </YMaps>
    );
}