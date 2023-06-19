export function TableTemplate({rows, name}) {
  return (
    <table>
      <thead>
        <tr>
          <th>{name ? `Info type` : 'ID'}</th>
          <th>{name ? `Info about ${name}` : 'User'}</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}