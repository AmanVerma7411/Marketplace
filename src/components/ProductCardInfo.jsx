// src/components/ProductCardInfo.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProductCardInfo({ item, onBack }) {
  if (!item) return null;

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 overflow-y-auto max-h-[95vh]">

        <button
          onClick={onBack}
          className="text-blue-600 mb-4 hover:underline font-semibold"
        >
          ← Back to products
        </button>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{item.title}</h1>

        <div className="mb-6">
          <Card>
            <CardActionArea>
              <div className="flex justify-center items-center py-4">
                <div className="w-[350px] h-[350px] overflow-hidden rounded-lg shadow">
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-start gap-2 p-3 overflow-x-auto">
                {[...Array(6)].map((_, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt="thumbnail"
                    className="w-[120px] h-20 rounded border"
                  />
                ))}
              </div>

              <CardContent>
                <Typography variant="h6" className="font-bold">
                  {item.title} <span className="float-right text-gray-800">{item.price}</span>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mt-2 text-xl">
                  Description about this product goes here...
                </Typography>
                <p className="text-blue-600 text-sm mt-1 cursor-pointer hover:underline">Read more</p>
                <p className="text-sm text-gray-400 mt-3">{item.promotedBy} • March 9, 2022</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-green-600 text-lg" />
              <span className="text-gray-700">+91 1234567890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-red-600 text-lg" />
              <span className="text-gray-700">xyz@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-lg" />
              <span className="text-gray-700">www.xyz.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-lg" />
              <span className="text-gray-700">+91 1234567890</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
