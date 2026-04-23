{/* --- PHẦN HÀN KÍNH Ô TÔ (Nối tiếp sau ProcessSection) --- */}
<section id="han-kinh" className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* Cột 1: Hình ảnh so sánh */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
            <div className="grid grid-cols-2 gap-1 p-2">
              <div className="relative">
                <img 
                  src="/han-kinh-truoc.jpg" 
                  alt="Kính ô tô trước khi hàn" 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-l-lg"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold uppercase">Trước</span>
              </div>
              <div className="relative">
                <img 
                  src="/han-kinh-sau.jpg" 
                  alt="Kính ô tô sau khi hàn" 
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-r-lg"
                />
                <span className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase">Sau khi hàn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cột 2: Nội dung & Giá cả */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          Giải pháp tiết kiệm
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Dịch Vụ Hàn Kính Ô Tô <br /> <span className="text-primary text-2xl md:text-3xl">Giữ Kính Zin - Tiết Kiệm Chi Phí</span>
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Không phải vết nứt nào cũng cần thay mới. Với công nghệ hút chân không và keo chuyên dụng, chúng tôi giúp bạn xử lý vết nứt bùng nổ, khôi phục thẩm mỹ đến 95%.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">⏱</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Thời gian thực hiện</p>
              <p className="font-bold text-foreground">Chỉ 30 - 45 phút</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="text-green-600 font-bold">💰</span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Chi phí chỉ từ</p>
              <p className="font-bold text-green-600 text-xl">500.000 VNĐ</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <p className="text-sm italic text-muted-foreground">
            * Lưu ý: Nên dán băng keo trong đè lên vết nứt ngay khi vừa xảy ra để tránh bụi bẩn chui vào, giúp kết quả hàn bùng nổ và đạt thẩm mỹ cao nhất.
          </p>
        </div>

        <div className="pt-4">
          <a 
            href="https://zalo.me/0903328054" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20"
          >
            Gửi hình vết nứt nhận tư vấn ngay
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
