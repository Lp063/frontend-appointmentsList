import { BiTrash } from "react-icons/bi"

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return (
        <li className="px-3 py-3 flex items-start" style={listItemStyle} >
              <button type="button"
              onClick={ ()=> onDeleteAppointment(appointment.id)}
                className="">
                <BiTrash /></button>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
                  <span className="flex-grow text-right">{appointment.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
                <div className="leading-tight">{appointment.aptNotes}</div>
              </div>
            </li>
    )
}

const listItemStyle={
    borderBottom: '1px solid', 
    paddingTop: '13px', 
    paddingBottom: '13px', 
    borderBottomColor: '#cecece'
}

export default AppointmentInfo;