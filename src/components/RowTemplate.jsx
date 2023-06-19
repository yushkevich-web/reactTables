export function RowTemplate({id, name, phone, email, address, website, onClick}) {
  return (
    <>
      <tr onClick={() => onClick('id')}>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
      {phone && (
        <tr>
          <td>Phone</td>
          <td>{phone}</td>
        </tr> 
      )}
      {email && (
        <tr>
          <td>E-mail</td>
          <td>{email}</td>
        </tr> 
      )}
      {website && (
        <tr>
          <td>Website</td>
          <td>{website}</td>
        </tr> 
      )}
      {address && (
        <tr>
          <td>Adress</td>
          <td>{address.street}</td>
        </tr> 
      )}
    </>
  )
}
