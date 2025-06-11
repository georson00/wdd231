
const userInfo = new URLSearchParams(window.location.search);

const timestampRaw = userInfo.get('timestamp');
let formattedTimestamp = 'Not provided';
if (timestampRaw) {
  const timestampDate = new Date(timestampRaw);
  formattedTimestamp = timestampDate.toLocaleString(); 
}

document.getElementById('confirmation').innerHTML = `

<h2> Thank You for Joining Us </h2>
<p><strong>Welcome onboard! your registration is confirmed.</strong></p>
<p>Name: ${userInfo.get('first')} ${userInfo.get('last')}</p>
<p>Phone: ${userInfo.get('phone')}</p>
<p>Email: ${userInfo.get('email')}</p>
<p>Organization: ${userInfo.get('organization')}</p>
<p>Membership: ${userInfo.get('membership-level')}</p>
<p><strong>Registration Date and Time: ${formattedTimestamp}</strong></p>


`;
