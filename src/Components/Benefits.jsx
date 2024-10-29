import React from 'react';

const Benefits = () => {
  const benefits = [
    { title: 'CRM', 
      description: 
      <ul className='list-disc mx-4'>
        <li>Manage Leads</li>
        <li>Contacts</li>
        <li>Manage Deals</li>
        <li>Client Management</li>
      </ul>},
    { title: 'HR Management', description: 
      <ul className='list-disc mx-4'>
        <li>Onboarding</li>
        <li>Shift Roster</li>
        <li>Designation, Holiday, Leaves</li>
        <li>Department</li>
      </ul> },
    { title: 'Project Management', description: 
      <ul className='list-disc mx-4'>
        <li>Contacts</li>
        <li>Projects</li>
        <li>Time Management, Time Sheets</li>
        <li>Kanban</li>
      </ul> },
    { title: 'Finance', description: 
      <ul className='list-disc mx-4'>
        <li>Proposal, Estimates, Invoices</li>
        <li>Credit Note, Bank Account</li>
        <li>Expenses</li>
        <li>E-Invoice</li>
      </ul> },
    { title: 'Asset Management', description: 
      <ul className='list-disc mx-4'>
        <li>Onboading</li>
        <li>Tracking</li>
        <li>Operational Efficiency</li>
        <li>Support & Logistics</li>
      </ul> },
    { title: 'Payroll', description: 
      <ul className='list-disc mx-4'>
        <li>Create & Manage Payrolls</li>
        <li>Salary</li>
        <li>Resource Payments</li>
        <li>Reports</li>
      </ul> },

    { title: 'PO Management', description: 
      <ul className='list-disc mx-4'>
        <li>Onboard Vendor</li>
        <li>Vendor Credits, Payments</li>
        <li>Manage Products</li>
        <li>Manage Inventory</li>
      </ul> },

    { title: 'Recruitment', description: 
      <ul className='list-disc mx-4'>
        <li>Dashboard</li>
        <li>Jobs, Job Applications</li>
        <li>Career Site</li>
        <li>Interview Schedule</li>
      </ul> },

    { title: 'Kanban', description: 
      <ul className='list-disc mx-4'>
        <li>Task Management</li>
        <li>Create & Manage Tasks</li>
        <li>Reports</li>
        <li>Create Categories</li>
      </ul> },
    
    { title: 'Common Modules', description: 
      <ul className='list-disc mx-4'>
        <li>System Administration</li>
        <li>Biolinks, Blog</li>
        <li>Event Management</li>
        <li>Notice Board</li>
      </ul> },
  ];

  return (
    <section id="features" className="bg-white z-1 h-full py-24 text-gray-700">
      <h2 className="text-3xl font-bold text-center mb-8">Solutions</h2>
      <div className="max-w-full mx-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-l">
            <h3 className="text-xl font-normal text-blue-500 mb-2">{benefit.title}</h3>
            <p className='mx-8'>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

