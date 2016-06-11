var navbar = React.createClass({
  render: function () {
    return (
        <nav class="navbar navbar-light bg-faded">
            <div class="nav navbar-nav">
                <a class="nav-item nav-link active" href="#">Dashboard <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Speaker</a>
                <a class="nav-item nav-link" href="#">About</a>
            </div>
        </nav>
    );
  }
});
navbar.render('navbar');
console.info('navbar');