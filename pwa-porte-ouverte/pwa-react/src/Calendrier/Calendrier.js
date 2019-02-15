import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './Calendrier.css'

class Calendrier extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            localizer : BigCalendar.momentLocalizer(moment),
            eventsList :  [
                {
                    id: 0,
                    title: 'Journée porte ouverte',
                    allDay: true,
                    start: new Date(2019, 2, 2),
                    end: new Date(2019, 2, 2),
                },
                {
                    id: 1,
                    title: 'Bonjour',
                    start: new Date(2019, 3, 3),
                    end: new Date(2019, 3, 3),
                }
            ]
        }
    }
    
    render() {
        return(
            <div className="calendrier">
                <BigCalendar
                    localizer={this.state.localizer}
                    events={this.state.eventsList}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    views={['month']}
                />
            </div>
        );
    }
}

export default Calendrier;