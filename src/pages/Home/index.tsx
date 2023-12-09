import Banner from "../../components/blocks/Banner";
import Container from "../../components/blocks/Container";
import Section from "./Section";

const Home = () => {
    const sections = [
        {
            title: "Popular",
            category: "movie",
            type: "popular",
        },
        {
            title: "Now Playing",
            category: "movie",
            type: "now_playing",
        },
        {
            title: "Top Rated",
            category: "movie",
            type: "top_rated",
        },
        {
            title: "Upcoming",
            category: "movie",
            type: "upcoming",
        },
    ];
    return (
        <>
            <Banner />
            <Container>
                {sections.map(({ title, category, type }) => (
                    <Section title={title} category={category} type={type} key={type} />
                ))}
            </Container>
        </>
    )
}

export default Home;