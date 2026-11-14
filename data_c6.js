// CHƯƠNG 6: CHỨC NĂNG KIỂM TRA (6 CÂU)
window.DATA_C6 = [
  {
    id: 53,
    chapter: 6,
    stage: 3,
    code: "C6.Q1",
    title: "Khái niệm, Bản chất & Vai trò của Kiểm tra",
    question: "Khái niệm, bản chất, vai trò của kiểm tra?",
    keywords: ["Kiểm tra (Controlling)", "Đo lường & So sánh", "Phát hiện sai lệch", "Cơ chế phản hồi (Feedback loop)", "Bảo đảm mục tiêu"],
    summary: [
      "Khái niệm: Quá trình đo lường kết quả thực tế, so sánh với tiêu chuẩn kế hoạch để phát hiện sai lệch và đưa ra biện pháp điều chỉnh kịp thời.",
      "Bản chất: Cơ chế phản hồi khép kín chu trình quản trị, không phải là 'vạch lá tìm sâu' mà để giúp đỡ và hoàn thiện hệ thống.",
      "Vai trò: Bảo đảm kế hoạch về đích đúng hẹn, Ngăn ngừa thất thoát lãng phí, Thích ứng biến động môi trường, Hoàn thiện cho chu kỳ hoạch định sau."
    ],
    explanation: `
      <p><strong>1. Khái niệm Kiểm tra (Controlling):</strong></p>
      <p>Kiểm tra là chức năng quản trị then chốt khép kín chu trình quản lý, là quá trình chủ thể quản trị thực hiện việc <strong>đo lường kết quả thực hiện thực tế</strong>, đem đối chiếu <strong>so sánh với các tiêu chuẩn</strong> đã đặt ra trong kế hoạch, nhằm phát hiện những sai lệch và nguyên nhân, từ đó tiến hành các <strong>biện pháp điều chỉnh kịp thời</strong> nhằm đảm bảo tổ chức hoàn thành thắng lợi các mục tiêu đã đề ra.</p>
      <p><strong>2. Bản chất đích thực của Kiểm tra:</strong></p>
      <ul>
        <li>Kiểm tra không phải là hoạt động trừng phạt, soi mói hay "vạch lá tìm sâu" để bắt lỗi nhân viên.</li>
        <li>Bản chất của kiểm tra là <strong>thiết lập một cơ chế phản hồi thông tin (Feedback loop)</strong> liên tục, giúp phát hiện sớm các rủi ro nguy cơ để hỗ trợ, hướng dẫn và chấn chỉnh bộ máy hoạt động đúng quỹ đạo.</li>
      </ul>
      <p><strong>3. Bốn vai trò to lớn của chức năng Kiểm tra:</strong></p>
      <ul>
        <li><strong>Bảo đảm kế hoạch được thực thi chính xác:</strong> Giúp nhà quản trị biết rõ công việc đang tiến triển đến đâu, có đúng tiến độ, ngân sách và chất lượng cam kết hay không.</li>
        <li><strong>Ngăn chặn và hạn chế tối đa các sai lầm, lãng phí:</strong> Phát hiện kịp thời các hiện tượng tham nhũng, lãng phí nguyên vật liệu, gian lận tài chính trước khi hậu quả trở nên quá lớn.</li>
        <li><strong>Giúp tổ chức chủ động thích ứng với biến động môi trường:</strong> Khi thị trường thay đổi, kiểm tra giúp nhận diện sự không còn phù hợp của kế hoạch cũ để kịp thời điều chỉnh mục tiêu mới.</li>
        <li><strong>Tạo cơ sở dữ liệu thực tiễn cho chu kỳ Hoạch định tiếp theo:</strong> Cung cấp các bài học kinh nghiệm và số liệu chuẩn mực để việc lập kế hoạch kỳ sau sát với thực tế hơn.</li>
      </ul>
    `,
    example: "Hãng ô tô Toyota kiểm tra chất lượng trên từng công đoạn dập vỏ xe: Bất kỳ công nhân nào phát hiện lỗi đều có quyền giật dây Andon dừng dây chuyền ngay lập tức để sửa lỗi tại chỗ, ngăn chặn xe lỗi xuất xưởng.",
    quiz: {
      question: "Bản chất khoa học và đúng đắn nhất của chức năng Kiểm tra trong quản trị là gì?",
      options: [
        "A. Bắt lỗi, soi mói để tìm cớ trừ lương nhân viên",
        "B. Thiết lập cơ chế phản hồi thông tin để phát hiện sai lệch và điều chỉnh kịp thời giúp đạt được mục tiêu",
        "C. Trừng phạt công khai người mắc lỗi trước toàn công ty",
        "D. Chỉ thực hiện khi công ty chuẩn bị giải thể"
      ],
      answer: 1,
      explanation: "Kiểm tra là cơ chế phản hồi mang tính xây dựng, hướng tới việc phòng ngừa sai sót và điều chỉnh hành động nhằm đảm bảo mục tiêu chung."
    }
  },
  {
    id: 54,
    chapter: 6,
    stage: 3,
    code: "C6.Q2",
    title: "Nội dung & Mức độ Kiểm tra",
    question: "Nội dung và mức độ kiểm tra?",
    keywords: ["Kiểm tra mục tiêu", "Kiểm tra quy trình/hoạt động", "Kiểm tra nguồn lực", "Kiểm tra toàn diện", "Kiểm tra xác suất", "Kiểm tra trọng điểm"],
    summary: [
      "Nội dung: Kiểm tra mục tiêu (chỉ tiêu kết quả), Kiểm tra quy trình công nghệ/quy chế, Kiểm tra nguồn lực (tài chính, kho bãi, nhân sự).",
      "Mức độ: Kiểm tra toàn diện (100%), Kiểm tra chọn lọc/xác suất (lấy mẫu), Kiểm tra trọng điểm (tập trung khâu hiểm yếu/cổ chai)."
    ],
    explanation: `
      <p><strong>1. Nội dung kiểm tra trong doanh nghiệp:</strong></p>
      <ul>
        <li><strong>Kiểm tra việc thực hiện mục tiêu:</strong> Đánh giá mức độ hoàn thành các chỉ tiêu định lượng (doanh thu, lợi nhuận, thị phần, tiến độ dự án) so với bản kế hoạch.</li>
        <li><strong>Kiểm tra các hoạt động và quy trình tác nghiệp:</strong> Giám sát việc tuân thủ các quy trình công nghệ, quy chế an toàn lao động, tiêu chuẩn dịch vụ khách hàng (SOP) và đạo đức nghề nghiệp.</li>
        <li><strong>Kiểm tra các yếu tố nguồn lực:</strong> Kiểm kê tài sản cố định, số dư tiền mặt, định mức tiêu hao nguyên vật liệu, chất lượng máy móc thiết bị và hiệu suất sử dụng nhân sự.</li>
      </ul>
      <p><strong>2. Ba mức độ kiểm tra tùy theo nguồn lực:</strong></p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Mức độ kiểm tra</th><th>Đặc điểm & Cách thức tiến hành</th><th>Ưu & Nhược điểm</th></tr>
          <tr>
            <td><strong>Kiểm tra toàn diện</strong></td>
            <td>Kiểm tra 100% tất cả các đối tượng, sản phẩm hoặc công đoạn không bỏ sót chi tiết nào.</td>
            <td><strong>Ưu:</strong> Độ chính xác tuyệt đối, không có sai số.<br><strong>Nhược:</strong> Chi phí cực kỳ tốn kém, mất nhiều thời gian, dễ gây quá tải.</td>
          </tr>
          <tr>
            <td><strong>Kiểm tra chọn lọc / Xác suất</strong></td>
            <td>Rút ngẫu nhiên một tỷ lệ phần trăm mẫu đại diện (VD: 5% - 10% lô hàng) để kiểm tra chất lượng.</td>
            <td><strong>Ưu:</strong> Tiết kiệm chi phí, thời gian và nhân lực.<br><strong>Nhược:</strong> Tồn tại rủi ro sai số thống kê mẫu.</td>
          </tr>
          <tr>
            <td><strong>Kiểm tra trọng điểm (Điểm kiểm soát then chốt)</strong></td>
            <td>Chỉ tập trung vào các mắt xích sống còn, các khâu hiểm yếu ("nút thắt cổ chai") quyết định toàn cục.</td>
            <td><strong>Ưu:</strong> Hiệu quả kinh tế cao nhất, nắm bắt trúng tim điểm nghẽn của hệ thống mà không gây phiền toái diện rộng.</td>
          </tr>
        </table>
      </div>
    `,
    example: "Nhà máy sản xuất 1 triệu lon sữa đặc mỗi ngày: Không thể mở nắp nếm thử cả 1 triệu lon (kiểm tra toàn diện sẽ phá hủy sản phẩm); thay vào đó dùng kiểm tra xác suất lấy mẫu 500 lon kiểm nghiệm vi sinh.",
    quiz: {
      question: "Phương pháp kiểm tra chỉ tập trung nguồn lực vào những khâu hiểm yếu, các 'nút thắt cổ chai' quyết định sự thành bại của toàn bộ dây chuyền được gọi là gì?",
      options: [
        "A. Kiểm tra toàn diện 100%",
        "B. Kiểm tra trọng điểm (Điểm kiểm soát then chốt)",
        "C. Kiểm tra ngẫu hứng",
        "D. Bỏ qua kiểm tra"
      ],
      answer: 1,
      explanation: "Kiểm tra trọng điểm tập trung vào các điểm kiểm soát hiểm yếu nhất để tiết kiệm nguồn lực mà vẫn đảm bảo an toàn tuyệt đối cho hệ thống."
    }
  },
  {
    id: 55,
    chapter: 6,
    stage: 3,
    code: "C6.Q3",
    title: "Các yêu cầu đối với Hệ thống kiểm tra",
    question: "Trình bày các yêu cầu đối với hệ thống kiểm tra",
    keywords: ["Chính xác & Khách quan", "Kịp thời", "Tính kinh tế", "Tính linh hoạt", "Dễ hiểu", "Hướng vào trọng yếu", "Chỉ rõ biện pháp sửa sai"],
    summary: [
      "1. Tính chính xác và khách quan: Phản ánh đúng thực tế, không thiên vị số liệu ảo.",
      "2. Tính kịp thời: Phát hiện sai lệch ngay khi mới chớm nở.",
      "3. Tính kinh tế: Chi phí kiểm tra < Thiệt hại nếu không kiểm tra.",
      "4. Tính linh hoạt: Thích ứng khi kế hoạch thay đổi.",
      "5. Dễ hiểu và công khai tiêu chuẩn.",
      "6. Chỉ rõ hành động sửa sai khắc phục thiết thực."
    ],
    explanation: `
      <p>Một hệ thống kiểm tra hiệu lực trong tổ chức phải đáp ứng đầy đủ <strong>7 yêu cầu cốt lõi</strong>:</p>
      <ul>
        <li><strong>1. Tính chính xác và khách quan:</strong> Số liệu đo lường phải phản ánh trung thực bản chất sự việc, không bị bóp méo bởi cảm xúc cá nhân hay bệnh thành tích.</li>
        <li><strong>2. Tính kịp thời:</strong> Thông tin sai lệch phải được báo cáo ngay lập tức đến tay người có thẩm quyền; phát hiện sai sót sau khi hàng đã hỏng toàn bộ là vô ích.</li>
        <li><strong>3. Tính kinh tế (Chi phí - Hiệu quả):</strong> Chi phí bỏ ra để duy trì bộ máy kiểm tra phải luôn nhỏ hơn giá trị rủi ro thiệt hại được ngăn ngừa.</li>
        <li><strong>4. Tính linh hoạt:</strong> Hệ thống kiểm tra phải thích nghi được với những biến động bất ngờ của môi trường thị trường mà không làm tê liệt vận hành.</li>
        <li><strong>5. Tính dễ hiểu và minh bạch:</strong> Tiêu chuẩn kiểm tra phải được công khai, rõ ràng, nhân viên đọc là hiểu cách tự đánh giá bản thân.</li>
        <li><strong>6. Hướng vào các điểm kiểm soát trọng yếu:</strong> Tránh kiểm tra dàn trải vụn vặt gây ức chế tâm lý và lãng phí thời gian.</li>
        <li><strong>7. Phải chỉ rõ hành động sửa sai khắc phục (Action-oriented):</strong> Kiểm tra không chỉ để phê bình, mà điều quan trọng nhất là phải đưa ra giải pháp sửa chữa cụ thể để khắc phục hậu quả.</li>
      </ul>
    `,
    example: "Lắp đặt hệ thống camera AI trong nhà kho: Giúp phát hiện khói cháy trong 5 giây (Kịp thời), tự động kích hoạt vòi phun nước dập tắt (Hành động sửa sai tức thì) với chi phí nhỏ hơn nhiều so với giá trị hàng trăm tỷ trong kho (Tính kinh tế).",
    quiz: {
      question: "Nếu chi phí bỏ ra để thuê đội ngũ kiểm tra chất lượng lên tới 500 triệu đồng nhưng lô hàng chỉ có giá trị 200 triệu đồng thì hệ thống kiểm tra đã vi phạm yêu cầu nào?",
      options: [
        "A. Tính chính xác",
        "B. Tính kinh tế (Chi phí - Hiệu quả)",
        "C. Tính bảo mật",
        "D. Tính hợp pháp"
      ],
      answer: 1,
      explanation: "Tính kinh tế đòi hỏi chi phí kiểm soát phải tương xứng và nhỏ hơn lợi ích kinh tế hoặc thiệt hại mà nó bảo vệ."
    }
  },
  {
    id: 56,
    chapter: 6,
    stage: 3,
    code: "C6.Q4",
    title: "Các Biện pháp Xử lý sau Kiểm tra",
    question: "Các biện pháp xử lý sau kiểm tra",
    keywords: ["Giữ nguyên hiện trạng", "Điều chỉnh hoạt động", "Điều chỉnh tiêu chuẩn/kế hoạch", "Khen thưởng & Kỷ luật"],
    summary: [
      "Sau khi so sánh thực tế với tiêu chuẩn, nhà quản trị áp dụng 4 biện pháp:",
      "1. Giữ nguyên hiện trạng: Khi kết quả đạt chuẩn hoặc sai lệch trong dung sai cho phép.",
      "2. Điều chỉnh hoạt động: Sửa chữa quy trình, bồi dưỡng nhân sự, tăng ca.",
      "3. Điều chỉnh tiêu chuẩn/mục tiêu: Khi mục tiêu quá phi thực tế hoặc môi trường biến động lớn.",
      "4. Chế tài khen thưởng hoặc xử lý kỷ luật."
    ],
    explanation: `
      <p>Kết quả kiểm tra là căn cứ khoa học để nhà quản trị đưa ra <strong>4 quyết định xử lý hành động</strong>:</p>
      <ul>
        <li><strong>1. Giữ nguyên hiện trạng (Không làm gì cả):</strong>
          <p>Áp dụng khi kết quả thực tế hoàn thành tốt kế hoạch, hoặc mức độ sai lệch rất nhỏ nằm hoàn toàn trong phạm vi dung sai cho phép. Tiếp tục duy trì quy trình vận hành bình thường.</p>
        </li>
        <li><strong>2. Điều chỉnh hoạt động tác nghiệp:</strong>
          <p>Áp dụng khi mục tiêu đề ra là đúng đắn nhưng khâu thực thi bị trục trặc. Biện pháp: Đào tạo lại tay nghề cho nhân viên, sửa chữa bảo dưỡng máy móc, tổ chức làm thêm ca kíp, thay đổi nhà cung cấp nguyên liệu kém chất lượng.</p>
        </li>
        <li><strong>3. Điều chỉnh tiêu chuẩn hoặc mục tiêu kế hoạch:</strong>
          <p>Áp dụng khi sai lệch phát sinh do chính bản thân kế hoạch ban đầu: Mục tiêu đặt ra quá viển vông phi thực tế, hoặc do môi trường vĩ mô có biến cố bất khả kháng (thiên tai, dịch bệnh, chiến tranh). Nhà quản trị phải dũng cảm hạ thấp hoặc nâng cao mục tiêu cho phù hợp với thực tiễn mới.</p>
        </li>
        <li><strong>4. Khen thưởng và Xử lý kỷ luật:</strong>
          <p>Khen thưởng kịp thời các tập thể, cá nhân hoàn thành vượt mức chỉ tiêu; đồng thời áp dụng chế tài xử phạt nghiêm minh đối với những vi phạm do vô trách nhiệm hoặc cố ý làm trái.</p>
        </li>
      </ul>
    `,
    example: "Khi dịch Covid bùng phát khiến chuỗi cung ứng toàn cầu đứt gãy, mục tiêu tăng trưởng doanh thu 30% trở nên bất khả thi -> Doanh nghiệp quyết định 'Điều chỉnh mục tiêu kế hoạch' về mức bảo toàn vốn và duy trì việc làm.",
    quiz: {
      question: "Khi kết quả kiểm tra cho thấy sai lệch bắt nguồn từ việc đặt ra mục tiêu ban đầu quá cao một cách viển vông và phi thực tế, nhà quản trị nên làm gì?",
      options: [
        "A. Sa thải toàn bộ nhân viên kinh doanh",
        "B. Điều chỉnh lại tiêu chuẩn và mục tiêu kế hoạch cho sát với thực tế",
        "C. Cố tình giấu nhẹm số liệu báo cáo",
        "D. Giữ nguyên hiện trạng không quan tâm"
      ],
      answer: 1,
      explanation: "Khi mục tiêu ban đầu sai lầm do dự báo thiếu căn cứ, biện pháp khoa học là phải hiệu chỉnh lại mục tiêu kế hoạch cho thực tế."
    }
  },
  {
    id: 57,
    chapter: 6,
    stage: 3,
    code: "C6.Q5",
    title: "Các Hình thức Kiểm tra trong Tổ chức",
    question: "Trình bày các hình thức kiểm tra",
    keywords: ["Kiểm tra lường trước (Feedforward)", "Kiểm tra đồng thời (Concurrent)", "Kiểm tra phản hồi (Feedback)", "Theo tần suất", "Theo chủ thể"],
    summary: [
      "Theo thời gian (Quan trọng nhất):",
      "1. Kiểm tra lường trước: Trước khi làm, kiểm soát đầu vào (ngăn ngừa từ trứng nước).",
      "2. Kiểm tra đồng thời: Trong khi làm, giám sát tại chỗ để sửa ngay.",
      "3. Kiểm tra phản hồi: Sau khi xong, đo lường đầu ra và rút kinh nghiệm kỳ sau.",
      "Theo tần suất: Định kỳ, Đột xuất, Liên tục.",
      "Theo chủ thể: Kiểm tra nội bộ vs Kiểm tra từ bên ngoài."
    ],
    explanation: `
      <p><strong>1. Phân loại theo thời gian tiến hành (Ba hình thức kinh điển):</strong></p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Hình thức kiểm tra</th><th>Thời điểm tiến hành</th><th>Đối tượng & Bản chất</th><th>Ví dụ thực tế</th></tr>
          <tr>
            <td><strong>Kiểm tra Lường trước (Dự phòng / Feedforward Control)</strong></td>
            <td><strong>TRƯỚC KHI</strong> hoạt động bắt đầu diễn ra</td>
            <td>Tập trung kiểm soát chất lượng <strong>các yếu tố đầu vào</strong> (tuyển chọn nhân sự kỹ lưỡng, kiểm tra nguyên vật liệu, bảo dưỡng máy móc) nhằm ngăn chặn sai sót ngay từ trong trứng nước. Đây là hình thức tiết kiệm và hiệu quả nhất.</td>
            <td>Hãng máy bay kiểm tra kỹ thuật động cơ nghiêm ngặt trước khi cất cánh</td>
          </tr>
          <tr>
            <td><strong>Kiểm tra Đồng thời (Hiện hành / Concurrent Control)</strong></td>
            <td><strong>TRONG KHI</strong> hoạt động đang diễn ra</td>
            <td>Giám sát trực tiếp tại hiện trường để phát hiện sai lệch và uốn nắn, sửa chữa ngay lập tức trước khi nó tạo ra sản phẩm hỏng.</td>
            <td>Quản đốc đi lại trong xưởng nhắc nhở công nhân đeo găng tay bảo hộ</td>
          </tr>
          <tr>
            <td><strong>Kiểm tra Phản hồi (Sau thực hiện / Feedback Control)</strong></td>
            <td><strong>SAU KHI</strong> hoạt động đã hoàn thành</td>
            <td>Đo lường sản phẩm <strong>đầu ra</strong> cuối cùng, đối chiếu với tiêu chuẩn, thanh quyết toán tài chính và rút kinh nghiệm cho chu kỳ sau. Nhược điểm: Sự việc đã rồi, chi phí khắc phục cao.</td>
            <td>Khảo sát mức độ hài lòng của khách sau khi dùng bữa tại nhà hàng</td>
          </tr>
        </table>
      </div>
      <p><strong>2. Các cách phân loại khác:</strong></p>
      <ul>
        <li><em>Theo tần suất:</em> Kiểm tra định kỳ (theo lịch báo trước), Kiểm tra đột xuất (không báo trước để bắt quả tang vi phạm), Kiểm tra liên tục.</li>
        <li><em>Theo chủ thể:</em> Tự kiểm tra (cá nhân), Kiểm tra nội bộ (ban thanh tra công ty), Kiểm tra bên ngoài (kiểm toán độc lập, thanh tra thuế).</li>
      </ul>
    `,
    example: "Hãng Dược phẩm kiểm nghiệm hoạt chất nguyên liệu nhập về trước khi đưa vào sản xuất thuốc (Kiểm tra lường trước); theo dõi nhiệt độ lò sấy trong lúc đóng viên nang (Kiểm tra đồng thời); xét nghiệm hàm lượng thuốc sau khi đóng vỉ (Kiểm tra phản hồi).",
    quiz: {
      question: "Hình thức kiểm tra nào được thực hiện TRƯỚC KHI hoạt động diễn ra, tập trung vào việc kiểm soát các yếu tố đầu vào để ngăn chặn sai sót từ đầu?",
      options: [
        "A. Kiểm tra phản hồi (Feedback control)",
        "B. Kiểm tra lường trước / dự phòng (Feedforward control)",
        "C. Kiểm tra đồng thời",
        "D. Kiểm toán phá sản"
      ],
      answer: 1,
      explanation: "Kiểm tra lường trước (Feedforward control) đi trước một bước, kiểm soát kỹ đầu vào để ngăn chặn lỗi phát sinh."
    }
  },
  {
    id: 58,
    chapter: 6,
    stage: 3,
    code: "C6.Q6",
    title: "Phương pháp Kiểm tra: Truyền thống vs Hiện đại",
    question: "Trình bày các phương pháp kiểm tra: Truyền thống, hiện đại",
    keywords: ["Phương pháp truyền thống", "Phương pháp hiện đại", "Thẻ điểm cân bằng (BSC)", "Quản trị chất lượng toàn diện (TQM)", "Six Sigma (6σ)", "Benchmarking"],
    summary: [
      "Truyền thống: Quan sát trực tiếp, Báo cáo thống kê, Kiểm toán tài chính, Phân tích điểm hòa vốn.",
      "Hiện đại: Thẻ điểm cân bằng BSC (4 khía cạnh: Tài chính, Khách hàng, Nội bộ, Học hỏi), TQM (chất lượng toàn diện Kaizen), Six Sigma (dưới 3,4 lỗi/triệu), Benchmarking (học hỏi tinh hoa đối thủ)."
    ],
    explanation: `
      <p>Sự tiến hóa của các phương pháp kiểm tra quản trị qua hai thời kỳ:</p>
      <div class="academic-table-wrapper">
        <table class="academic-table">
          <tr><th>Nhóm phương pháp</th><th>Các công cụ tiêu biểu</th><th>Bản chất & Ứng dụng</th></tr>
          <tr>
            <td><strong>Phương pháp Truyền thống</strong></td>
            <td>
              - <strong>Quan sát trực tiếp tại hiện trường:</strong> Lãnh đạo trực tiếp thị sát tận mắt.<br>
              - <strong>Báo cáo thống kê định kỳ:</strong> Bảng số liệu biểu đồ tổng kết tuần, tháng.<br>
              - <strong>Kiểm toán tài chính & Ngân sách:</strong> Rà soát sổ sách chứng từ kế toán.<br>
              - <strong>Phân tích điểm hòa vốn (Break-even):</strong> Xác định sản lượng tối thiểu để doanh thu bù đắp chi phí.
            </td>
            <td>Chủ yếu tập trung vào các chỉ số tài chính quá khứ và sự tuân thủ quy chế; mang tính phản ứng bị động khi sự việc đã diễn ra.</td>
          </tr>
          <tr>
            <td><strong>Phương pháp Hiện đại</strong></td>
            <td>
              - <strong>Thẻ điểm cân bằng (Balanced Scorecard - BSC):</strong> Kiểm soát đa chiều cân bằng trên <strong>4 khía cạnh</strong>: 1. Tài chính; 2. Khách hàng; 3. Quy trình nội bộ; 4. Học hỏi & Phát triển.<br>
              - <strong>Quản trị chất lượng toàn diện (TQM):</strong> Triết lý xem chất lượng là trách nhiệm của tất cả mọi người, cải tiến liên tục không ngừng nghỉ (Kaizen).<br>
              - <strong>Hệ thống Six Sigma (6σ):</strong> Phương pháp thống kê giảm thiểu tỷ lệ lỗi sản phẩm xuống mức gần như hoàn hảo (dưới 3,4 lỗi trên 1 triệu cơ hội).<br>
              - <strong>Benchmarking (Đối sánh chuẩn):</strong> So sánh quy trình và kết quả của công ty với doanh nghiệp giỏi nhất thế giới trong ngành để học hỏi vươn lên.
            </td>
            <td>Tích hợp công nghệ số, dự báo tương lai, hướng vào sự hài lòng khách hàng và nâng cao năng lực cạnh tranh dài hạn.</td>
          </tr>
        </table>
      </div>
    `,
    example: "Hãng ô tô Toyota áp dụng TQM và Six Sigma trên toàn cầu để kiểm soát chất lượng từ nhân viên bảo vệ đến CEO, tạo nên uy tín độ bền huyền thoại.",
    quiz: {
      question: "Công cụ kiểm soát hiện đại nào đánh giá hiệu quả hoạt động của doanh nghiệp một cách toàn diện trên 4 khía cạnh: Tài chính, Khách hàng, Quy trình nội bộ và Học hỏi & Phát triển?",
      options: [
        "A. Báo cáo kiểm kê kho",
        "B. Thẻ điểm cân bằng (Balanced Scorecard - BSC)",
        "C. Phương pháp ngoại cảm",
        "D. Bảng chấm công hàng ngày"
      ],
      answer: 1,
      explanation: "Thẻ điểm cân bằng (BSC) của Kaplan & Norton là công cụ quản trị chiến lược kiểm soát toàn diện 4 trụ cột sống còn của doanh nghiệp."
    }
  }
];
