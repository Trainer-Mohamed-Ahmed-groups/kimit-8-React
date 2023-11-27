import Profile from "../components/Profile";

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                name="Maria Skłodowska-Curie"
                url='szV5sdG'
                num='4'
                desc="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
                discoverd=" polonium (chemical element)"
                prof="physicist and chemist"
            />
            <Profile
                name="Katsuko Saruhashi"
                url='YfeOqp2'
                num='2'
                desc="(Miyake Prize for geochemistry, Tanaka Prize)"
                discoverd="a method for measuring carbon dioxide in seawater"
                prof="geochemist"
            />
        </div>
    );
}
