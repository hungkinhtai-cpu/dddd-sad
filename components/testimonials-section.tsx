{/* --- PHẦN VIDEO VÀ DANH SÁCH CHI NHÁNH KÍNH TÀI --- */}
        <div className="flex flex-col items-center pt-8 border-t border-border">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 uppercase text-center">
            Quy trình gắn kính chuyên nghiệp
          </h3>
          <p className="text-muted-foreground mb-8 italic text-center">
            Cận cảnh thợ Kính Tài thi công trực tiếp cho khách hàng
          </p>
          
          <div className="w-full max-w-[340px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-card mb-10">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              controls
              className="w-full h-full object-cover"
            >
              <source src="/quy-trinh-gan-kinh.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* HỆ THỐNG CHI NHÁNH */}
          <div className="w-full max-w-2xl grid md:grid-cols-2 gap-4">
            {/* Chi nhánh 1 */}
            <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="font-bold text-sm uppercase">Chi nhánh Quận 5</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                374 An Dương Vương, Phường 4, Quận 5, TP.HCM
              </p>
            </div>

            {/* Chi nhánh 2 */}
            <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="font-bold text-sm uppercase">Chi nhánh Bình Tân</span>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                1/117 Đường số 1, KDC Nam Hùng Vương, P. An Lạc, Bình Tân, TP.HCM
              </p>
            </div>
          </div>

          <p className="mt-6 text-muted-foreground text-xs italic">
            * Hỗ trợ thay kính tận nơi miễn phí tại khu vực TP.HCM
          </p>
        </div>
