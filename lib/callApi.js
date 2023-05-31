// Phần 1: Đoạn code bất đồng bộ để callAPI lấy data tĩnh (json) từ thư mục của dự án.
fetch("./data/tour_card.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); 
    console.log(data.content); // show ra data được hiển thị như thế.
    renderItemTourCard(data.content); // một callback được viết ra để render item và có tham số là data.content là đầu vào
  })
  .catch((error) => {
    console.log("Error:", error); // lệnh này được thực thi khi những promise bên trên bị lỗi và show ra lỗi để fix.
  });

// Phần 2:
function renderItemTourCard(arrTourCard) { //đây là function được viết ra để callback vào pormise và truyển giá trị đầu vào (đổi tên lại là arrTourCard)
  var html = ""; // biến khởi tạo để chứa template string được lặp ở vòng lặp for phía dưới
  for (var tour of arrTourCard) { //vòng lặp từng đối tượng trong mảng có trong data được truyển vào phía trên promise.
    html += `
          <div class="col">
          <div class="card h-100 card2">
            <img src=${tour.src} alt="tourcardImg" />
            <div class="card-body">
              <h5 class="card-title fw-bold text-center fw-bold">${tour.title}</h5>
              <p class="card-text">${tour.description}</p>
            </div>
            <div class="card-body2">
          <!-- <a href="#" class="btn">Buy now</a> -->
               <span class="vote bg-light bg-dark text-white">${tour.vote}<i class="far fa-star ms-2 text-warning"></i></span>
               <span class="price bg-success text-white">${tour.price} đ</span>
             </div>
            </div>
        </div>
                `;
  }
  console.log(html); //show ra kết quả cuối cùng khi duyệt qua vòng lặp (sẽ thấy trên màn hình console trình duyệt)
  document.querySelector("#renderTourApi").innerHTML = html; // đoạn javascript DOM chèn template vào index.html để ra được kết quả cuối cùng (là những tourcard).
}
