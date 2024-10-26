import React from 'react';

const Contacts: React.FC = () => {
  return (
      <div className="container mt-5">
        <h2 className="text-center">Contact Us</h2>
        <p className="mt-4">If you have any questions, I will be happy to answer them.</p>
        <ul className="list-unstyled mt-3">
          <li><strong>Email:</strong> alex@gmail.com</li>
          <li><strong>Phone:</strong> +996 770 567 890</li>
          <li><strong>Address:</strong> Marks St, Bishkek, Kyrgyzstan</li>
        </ul>
      </div>
  );
};

export default Contacts;