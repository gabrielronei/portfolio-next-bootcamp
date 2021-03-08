import { CardWrapper } from './styles/CardWrapper';

export default function Card() {
    const projetos = [
        {
            image: 'https://via.placeholder.com/400',
            title: 'PROJETO',
            description: 'Este é o Projeto X.',
            url: 'https://uma.url.maneira/',
        },
        {
            image: 'https://via.placeholder.com/400',
            title: 'PROJETO',
            description: 'Este é o Projeto Y.',
            url: 'https://uma.url.maneira/',
        },
        {
            image: 'https://via.placeholder.com/400',
            title: 'PROJETO',
            description: 'Este é o Projeto Z.',
            url: 'https://uma.url.maneira/',
        },
    ];

    return (
        <CardWrapper>
            {projetos.map((projeto) => (
                <CardWrapper.Item key={projeto.url}>
                    <CardWrapper.Link href={projeto.url}>
                        <CardWrapper.Image src={projeto.image} alt="imagem do projeto" />
                        <CardWrapper.Title>{projeto.title}</CardWrapper.Title>
                        <CardWrapper.Description>{projeto.description}</CardWrapper.Description>
                    </CardWrapper.Link>
                </CardWrapper.Item>
            ))}
        </CardWrapper>
    );
}