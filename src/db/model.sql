CREATE TABLE market_types(
    type_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
    type_name varchar(128),
    type_image varchar(1024),
    type_title varchar(16)
);

CREATE TABLE brand(
    brand_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
    brand_name varchar(64),
    brand_image varchar(1024),
    market_type UUID not null,
    FOREIGN KEY(market_type) REFERENCES market_types(type_id)
);

CREATE TABLE products(
    product_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
    product_name varchar(256) not null,
    product_image varchar(1024) not null,
    product_price int not null,
    brand_id UUID not null,
    FOREIGN KEY(brand_id) REFERENCES brand(brand_id)
);

CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4() not null,
    user_name varchar(64),
    user_password varchar(64),
    PRIMARY KEY (user_id)
);

CREATE TABLE order_last(
    order_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
    ordered_products varchar(2048) not null,
    client_info varchar(1024) not null,
    ordered_at DATE not null DEFAULT CURRENT_DATE
);

-- CREATE TABLE orders(
--     order_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
--     delivery_date DATE NOT NULL DEFAULT CURRENT_DATE
-- );

-- CREATE TABLE ordered_products(
--     id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
--     product_id int not null,
--     quantity int not null,
--     order_id int not null,
--     CONSTRAINT order_id
--     FOREIGN KEY(order_id) REFERENCES orders(order_id),
--     CONSTRAINT product_id
--     FOREIGN KEY(product_id) REFERENCES products(product_id)
-- );

-- CREATE TABLE client_info(
--     client_id UUID DEFAULT uuid_generate_v4() not null PRIMARY KEY,
--     client_name varchar(64),
--     client_phone int,
--     order_id int not null,
--     FOREIGN KEY(order_id) REFERENCES orders(order_id)
-- );