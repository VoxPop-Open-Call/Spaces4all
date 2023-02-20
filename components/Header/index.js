import { Header } from '@rneui/base';
import { Title } from './styledHeader';

export default function MainHeader() {
    return (
        <Header backgroundColor='red' elevated>

            <Title
                class="title"
            >Test</Title>

        </Header>
    )
}

