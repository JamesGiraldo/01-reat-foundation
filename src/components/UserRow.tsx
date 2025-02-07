import { User } from "../interfaces";

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
    const { id, email, first_name, last_name, avatar } = user
    return (
        <tr key={id}>
            <td> <img style={{ width: '50px' }} src={avatar} alt="{first_name}" /> </td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
