"use client"
import React, { useEffect } from 'react';

function NFCReader() {
  useEffect(() => {
    const handleNFC = async () => {
      if ('NDEFReader' in window) {
        try {
          const reader = new (window as any).NDEFReader(); // Sử dụng `as any` để tránh lỗi về kiểu dữ liệu không xác định trong TypeScript
          await reader.scan();

          reader.onreading = (event: any) => { // Tương tự, sử dụng `as any` để tránh lỗi về kiểu dữ liệu trong TypeScript
            console.log("Đã đọc thẻ NFC:", event.message.records);
            // Xử lý dữ liệu từ thẻ NFC ở đây
          };
        } catch (error) {
          console.error("Lỗi khi quét thẻ NFC:", error);
        }
      } else {
        console.error("Trình duyệt không hỗ trợ Web NFC.");
      }
    };

    handleNFC();
  }, []);

  return (
    <div>
      <p>123</p>
      {/* Giao diện hoặc phần cần hiển thị thông tin từ thẻ NFC */}
    </div>
  );
}

export default NFCReader;
