import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


export const Foother = () => {
    return (
        <div>
            <h1>About us</h1>
           <h4 className="about"> The Hayrapetyans furniture salon is the first company in Armenia that started importing furniture to Armenia after the collapse of the USSR. The result of almost 30 years of conscientious work is cooperation with many global brands. <br />
During these years, we have worked with  a number of European companies, with their traditions and unique products, available on the RA market, thereby becoming one of the leaders. <br />
Here you can find the furniture of leading Italian brands directly from the manufacturer, because our company is the only and official representative of these brands in Armenia. We are also the sole and official representative of Spanish, Russian, American and a number of other brands in RA (Natuzzi, Gianfranco Ferre, Minotti, etc.). <br />
Our furniture salon not only offers high-quality furniture, but also helps you find models suitable for your interior, because the furniture salon has a designer who can help with furnishing the territory.
</h4>
            <h2 className="Contacts">Contacts</h2>
            <h3 className="map"><FaLocationDot /> Armenia Yerevan, Baghramyan street</h3>
            <h3 className="phone1">< FaSquarePhone /> (+374 96 13 13 17)</h3>
        <footer>
            All rights reserved &copy;
        </footer>
        </div>
    )
}
