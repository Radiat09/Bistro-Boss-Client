import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxios from "../../hooks/useAxios/useAxios";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const AdminHome = () => {
  const { user } = useAuth();
  const axi = useAxios();
  const { data = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axi.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axi.get("/order-stats");
      return res.data;
    },
  });
  // console.log(chartData);

  //Bar chart Coustom shape
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Coustom function for pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Pie chart data
  const pieChartData = chartData.map((data) => {
    return {
      name: data._id,
      value: data.revenue,
    };
  });

  return (
    <div className="w-[95%] mx-auto mt-10">
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user.displayName ? user.displayName : "Back"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {/* Revenue */}
        <div
          style={{
            background: "linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)",
          }}
          className="flex justify-center items-center gap-5 text-white px-12 py-8 rounded-lg"
        >
          <FaWallet className="text-5xl"></FaWallet>
          <div>
            <h4 className="text-4xl font-extrabold">
              ${data?.revenue?.toFixed(2)}
            </h4>
            <p className="text-2xl">Revenue</p>
          </div>
        </div>
        {/* Coustomers */}
        <div
          style={{
            background: "linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)",
          }}
          className="flex justify-center items-center gap-5 text-white px-12 py-8 rounded-lg"
        >
          <FaUsers className="text-5xl"></FaUsers>
          <div>
            <h4 className="text-4xl font-extrabold">{data?.user}</h4>
            <p className="text-2xl">Coustomers</p>
          </div>
        </div>
        {/* Products */}
        <div
          style={{
            background: "linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)",
          }}
          className="flex justify-center items-center gap-5 text-white px-12 py-8 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M16.0992 34.779L12.9905 35.37C10.054 35.9284 7.84856 38.0415 7.36418 40.7573L5.79319 48.234C5.70236 48.6658 5.81125 49.1156 6.08938 49.4583C6.3675 49.801 6.78528 50 7.22658 50H17.1874V42.3817C17.1874 41.8596 17.4654 41.3769 17.917 41.1147L22.6646 38.3596C20.1099 37.868 17.8327 36.5864 16.0992 34.779Z"
              fill="white"
            />
            <path
              d="M44.2069 48.2335L42.6331 40.7558C42.1482 38.0407 39.9426 35.9284 37.0065 35.3706L33.8994 34.7804C32.7402 35.9886 31.3377 36.9612 29.7722 37.6206C29.7648 37.6251 20.1171 43.2253 20.1171 43.2253V50H42.7734C43.2148 50 43.6327 49.801 43.9108 49.4581C44.189 49.1153 44.2978 48.6654 44.2069 48.2335ZM25.4883 46.4845H24.5118C23.7028 46.4845 23.0469 45.8286 23.0469 45.0196C23.0469 44.2106 23.7028 43.5548 24.5118 43.5548H25.4883C26.2973 43.5548 26.9532 44.2106 26.9532 45.0196C26.9532 45.8286 26.2973 46.4845 25.4883 46.4845Z"
              fill="white"
            />
            <path
              d="M15.5761 16.8354H34.4238V19.7827H15.5761V16.8354Z"
              fill="white"
            />
            <path
              d="M15.5761 12.2467V13.9057H34.4238V12.2467C36.3204 11.3479 37.5622 9.4166 37.5622 7.28857C37.5622 4.26465 35.102 1.80449 32.078 1.80449C31.3682 1.80449 30.6636 1.94297 30.0103 2.2084C28.7256 0.798047 26.9305 0 25 0C23.0694 0 21.2743 0.797949 19.9896 2.2083C19.3363 1.94287 18.6317 1.80439 17.9218 1.80439C14.8979 1.80439 12.4377 4.26455 12.4377 7.28848C12.4377 9.4166 13.6795 11.3479 15.5761 12.2467Z"
              fill="white"
            />
            <path
              d="M25 35.6525C30.187 35.6525 34.407 31.4326 34.407 26.2456V22.7124H15.593V26.2456C15.593 31.4326 19.8129 35.6525 25 35.6525Z"
              fill="white"
            />
          </svg>
          <div>
            <h4 className="text-4xl font-extrabold">{data?.menuItems}</h4>
            <p className="text-2xl">Products</p>
          </div>
        </div>
        {/* Orders */}
        <div
          style={{
            background: "linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)",
          }}
          className="flex justify-center items-center gap-5 text-white px-12 py-8 rounded-lg"
        >
          <FaTruck className="text-5xl"></FaTruck>
          <div>
            <h4 className="text-4xl font-extrabold">{data?.orders}</h4>
            <p className="text-2xl">Orders</p>
          </div>
        </div>
      </div>
      <div className="flex mt-20">
        <div className="flex-1 w-full">
          <BarChart
            width={800}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="flex-1 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
