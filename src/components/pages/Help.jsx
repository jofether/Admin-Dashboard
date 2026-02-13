import React from 'react';
import { Card } from '../index';

function Help() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Help & Support</h1>
        <p className="text-gray-600">Get assistance and find answers</p>
      </div>

      <div className="max-w-4xl space-y-6">
        <Card title="Frequently Asked Questions">
          <div className="space-y-4">
            {[
              { q: 'How do I reset my password?', a: 'Go to Settings, click on Security, and follow the password reset instructions.' },
              { q: 'Where can I find my billing history?', a: 'Visit the Billing section in Settings to view all your invoices and transactions.' },
              { q: 'How do I export my data?', a: 'In Settings under Preferences, click the Download button to export your data.' },
              { q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and bank transfers.' },
            ].map((item, i) => (
              <div key={i} className="pb-4 border-b last:border-b-0">
                <p className="font-semibold text-gray-800 mb-2">{item.q}</p>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Contact Support">
          <div className="space-y-4">
            <p className="text-gray-700">Have a question? Our support team is here to help!</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" placeholder="Describe your issue..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="5" placeholder="Please provide details..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </div>
        </Card>

        <Card title="Documentation">
          <div className="space-y-3">
            {['Getting Started Guide', 'API Documentation', 'Tutorial Videos', 'Best Practices', 'Troubleshooting Guide'].map((doc) => (
              <a key={doc} href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-blue-600 font-medium">
                {doc} →
              </a>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

export default Help;
