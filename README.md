# Student Pickup Registration System

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Feather Icons](https://img.shields.io/badge/Feather_Icons-000000?style=for-the-badge&logo=feather&logoColor=white)](https://feathericons.com/)

## 📋 Overview

The **Student Pickup Registration System** is a comprehensive web-based application designed to streamline and secure the student pickup process at educational institutions. This system ensures that only authorized individuals can collect students by implementing a multi-layered verification process, including digital consent, visitor information collection, biometric photo capture, and electronic signatures.

Built with modern web technologies, this kiosk-mode application provides an intuitive, touch-friendly interface suitable for deployment on tablets or dedicated kiosks in school environments. The system prioritizes user privacy, data security, and ease of use to enhance safety protocols while maintaining efficiency.

## 🎯 Purpose & Use Cases

This application serves educational institutions by:

- **Enhancing Student Safety**: Verifies the identity of pickup persons through multiple authentication methods
- **Streamlining Administrative Processes**: Automates pickup registration and record-keeping
- **Ensuring Legal Compliance**: Maintains digital records for liability and audit purposes
- **Improving User Experience**: Provides a seamless, self-service registration process for visitors
- **Supporting Kiosk Deployment**: Designed for touch-screen interfaces in school lobbies or entry areas

Ideal for:

- Elementary and secondary schools
- Daycare centers
- After-school programs
- Educational institutions requiring secure pickup procedures

## ✨ Key Features

### 🔐 Privacy & Consent Management

- Interactive privacy notice with mandatory consent acknowledgment
- Clear data usage policies for transparency and compliance

### 📝 Comprehensive Visitor Registration

- Student selection with searchable dropdown
- Detailed visitor information collection (name, relationship, contact details)
- Optional government ID and vehicle plate number fields

### 📸 Biometric Photo Capture

- Real-time camera access with live video feed
- High-quality photo capture for identification purposes
- Retake functionality for optimal image quality

### ✍️ Electronic Signature Collection

- Touch-enabled signature pad for digital signatures
- Responsive canvas drawing with mouse and touch support
- Clear signature option for corrections

### 📊 Automated Record Management

- Instant submission with unique record ID generation
- Success confirmation with printable receipts
- Error handling with user-friendly notifications

### 🎨 Modern User Interface

- Responsive design optimized for tablets and kiosks
- Kiosk-mode restrictions (disabled text selection)
- Smooth animations and transitions using Anime.js
- Professional styling with Tailwind CSS

### 🔗 Integrated Navigation

- Seamless navigation between login, signup, pricing, and contact pages
- Consistent branding and user experience across all pages

## 🛠️ Technology Stack

- **Frontend Framework**: Vanilla JavaScript with modern ES6+ features
- **Styling**: Tailwind CSS for utility-first responsive design
- **Icons**: Feather Icons for consistent, lightweight iconography
- **Animations**: Anime.js for smooth UI transitions
- **Fonts**: Google Fonts (Inter) for professional typography
- **Camera API**: WebRTC getUserMedia for photo capture
- **Canvas API**: HTML5 Canvas for signature drawing

## 🚀 Installation & Setup

### Prerequisites

- Modern web browser with camera support (Chrome, Firefox, Safari, Edge)
- Webcam or camera device for photo capture
- Touch-screen support (recommended for kiosk deployment)

### Quick Start

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/student-pickup-registration.git
   cd student-pickup-registration
   ```

2. **Open in Browser**
   - Simply open `studentpickup.html` in your web browser
   - No server setup required for basic functionality
   - For production deployment, serve files through a web server

3. **Camera Permissions**
   - Grant camera access when prompted for photo capture functionality
   - Ensure proper lighting for optimal photo quality

### Development Setup

- Open files directly in a code editor (VS Code recommended)
- Use browser developer tools for debugging
- Test on multiple devices for responsive design validation

## 📖 Usage Guide

### For Visitors (Pickup Persons)

1. **Accept Privacy Notice**: Read and agree to the privacy policy
2. **Select Student**: Choose the student from the dropdown list
3. **Provide Information**: Fill in personal details and relationship
4. **Capture Photo**: Take a clear selfie for identification
5. **Sign Electronically**: Provide digital signature on the canvas
6. **Submit & Print**: Complete registration and print receipt

### For Administrators

- Access admin features through the login system
- Manage student records and pickup history
- Configure system settings and permissions

### Kiosk Deployment

- Deploy on tablet devices in school entry areas
- Configure browser in kiosk mode for restricted access
- Ensure stable internet connection for data submission

## 🔧 Configuration

### Customizing Student List

Edit the datalist in `studentpickup.html`:

```html
<datalist id="students-list">
  <option value="Student Name (ID: 12345)">
    <!-- Add more students -->
  </option>
</datalist>
```

### Styling Customization

Modify `pickup.css` for custom styling or update Tailwind classes in HTML files.

### JavaScript Functionality

Extend features in `pickup.js`:

- Add form validation
- Integrate with backend APIs
- Implement data persistence

## 📱 Browser Compatibility

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Mobile browsers (limited camera support)

## 🤝 Contributing

We welcome contributions to improve the Student Pickup Registration System!

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Use semantic HTML5 markup
- Follow JavaScript ES6+ best practices
- Maintain responsive design principles
- Ensure accessibility compliance (WCAG 2.1)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

For questions, support, or custom implementations:

- **Email**: support@studentpickup.com
- **Website**: [www.studentpickup.com](https://www.studentpickup.com)
- **Documentation**: [docs.studentpickup.com](https://docs.studentpickup.com)

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Feather Icons for beautiful, consistent iconography
- Anime.js for smooth animations
- Google Fonts for professional typography

---

**Built with ❤️ for safer school environments**
