import DefaultTemplate from '../components/templates/default'
import { Section2 } from '../components/styles'
import SearchBar from '../components/SearchBar'
import { List } from '../components/organisms'
import { TabItem } from '../components/atoms'
import { Tabs } from '../components/molecules'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './react_dates_overrides.css'
import travels from './data'

export default () => (
  <DefaultTemplate title='About us'>
    <Section2>
      <SearchBar />
    </Section2>
    <Section2 marginTop={20}>
      <div style={{ maxWidth: '600px', marginBottom: '30px' }}>
        <Tabs>
          <TabItem text='Todos' />
          <TabItem text='Paquetes' />
          <TabItem text='Salidas Confirmadas' />
        </Tabs>
      </div>
      <List items={travels} />
    </Section2>
  </DefaultTemplate>
)
