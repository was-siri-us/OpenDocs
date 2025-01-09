# Open Docs

This is a Google Docs clone built from scratch using the Quill API with real-time collaboration features, developed using **Next.js**, **Tailwind CSS**, **Quill**, and **Socket.io**.

## Features

- **Real-Time Collaboration**: Multiple users can edit the same document simultaneously using Socket.io for socket-based communication.
- **Shareable Links**: Users can generate and share links to documents with others.
- **Download/Print as PDF**: Users can print or download the document in PDF/DOCX format.
- **Document Preview**: Dynamic Thumbnail generation.
- **Document Update**: Real-time updates and synchronization of document content.
- **Formatting Shortcuts**: Customizable Keyboard shortcuts for text formatting (e.g., bold, italics, underline).

##Images
![Screenshot 2025-01-09 192954](https://github.com/user-attachments/assets/05f8ccc3-3574-40ab-b3d3-c8842f58cb7c)

![Screenshot 2025-01-09 193303](https://github.com/user-attachments/assets/0629f187-edde-45d3-a276-09326ac41566)

![image](https://github.com/user-attachments/assets/b9847f61-158a-4b3c-b9d0-e6838bc4d68d)



## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Quill**: A powerful rich text editor used to implement the document editing features.
- **Socket.io**: Used for enabling real-time communication for collaborative editing.

## Installation

   ```bash
   git clone https://github.com/was-siri-us/OpenDocs.git

   cd Open Docs

   bun i

   cd server

   bun i
   ```

## Starting the web application

**Frontend**
``` bash
bun run dev
```

**backend**
``` bash
nodemon server.js
```

   
