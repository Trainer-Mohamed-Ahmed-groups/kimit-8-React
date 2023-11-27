import { getImageUrl } from '../helpers/utils';
// eslint-disable-next-line react/prop-types
export default function Profile({ name, url, num, desc, discoverd, prof }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(url)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {prof}
                </li>
                <li>
                    <b>Awards: {num} </b>
                    {desc}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discoverd}
                </li>
            </ul>
        </section>
    )
}
